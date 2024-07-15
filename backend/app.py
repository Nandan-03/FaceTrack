from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import send_file,make_response
import os
import cv2
import matplotlib.pyplot as plt
import numpy as np
from numpy import expand_dims
from keras_facenet import FaceNet
import pickle
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from PIL import Image as PILImage
from datetime import datetime
 
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# Load HaarCascadeClassifier for Facial Detection
HaarCascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
MyFaceNet = FaceNet()

# Load the face database
with open("data.pkl", "rb") as myfile:
    database = pickle.load(myfile)

# Define the maximum number of identities per page
MAX_IDENTITIES_PER_PAGE = 10

# Function to write identified identities and output frame into a PDF
def write_to_pdf(pages, output_file):
    c = canvas.Canvas(output_file, pagesize=letter)

    # Loop through each page
    for page_num, (op, resized_image_path) in enumerate(pages, start=1):
        y_offset = 750  # Initial Y offset for writing text

        # Write identified identities
        for identity in op:
            c.drawString(100, y_offset, f"Identity: {identity}")
            y_offset -= 20  # Move to the next line

        # Insert resized image into PDF
        img = PILImage.open(resized_image_path)
        img_width, img_height = img.size
        aspect_ratio = img_height / img_width
        target_width = 400  # Adjust this value as needed
        target_height = int(target_width * aspect_ratio)
        img.thumbnail((target_width, target_height))
        c.drawInlineImage(resized_image_path, 100, y_offset - target_height, width=target_width, height=target_height)

        # Show page number
        c.drawString(100, 50, f"Page {page_num}")

        c.showPage()  # End the current page

    c.save()

# Function to process the image
def process_image(image_path):
    try:
        # Read the image
        img = cv2.imread(image_path)
        if img is None:
            return None, "Failed to read the image file. Please make sure the path is correct and the file exists."

        # Convert BGR image to RGB
        frame_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)


        # Detect faces
        wajah = HaarCascade.detectMultiScale(frame_rgb, 1.1, 4)

        recognized_ids = set()
        op = []
        pages = []  # Initialize pages list

        for (x, y, w, h) in wajah:
            # Extract the face region
            face = frame_rgb[y:y + h, x:x + w]

            # Resize the face image to match the input size of FaceNet
            face_resized = cv2.resize(face, (160, 160))
            

            # Convert the face image to an array and add a batch dimension
            face_array = np.expand_dims(face_resized, axis=0)

            # Get the embedding of the face using FaceNet model
            face_embedding = MyFaceNet.embeddings(face_array)

            min_dist = 100
            identity = 'unknown'

            for key, value in database.items():
                dist = np.linalg.norm(value - face_embedding)
                if dist < min_dist:
                    min_dist = dist
                    identity = key

            # Check if the minimum distance is below the threshold and if the ID has not been recognized before
            if min_dist < 0.8:
                # Face recognized, print the identity
                recognized_ids.add(identity)

                # Append the identity to the list
                op.append(identity)

                # Add the current page to the list if it has reached the maximum number of identities per page
                if len(op) >= MAX_IDENTITIES_PER_PAGE:
                    pages.append((op, 'resized_output_frame.jpg'))
                    op = []

                cv2.putText(img, identity, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)
                cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
            else:
                # Face not recognized, mark as unknown
                cv2.putText(img, "Unknown", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 0, 255), 2)
                cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 2)
                
        # Resize the image
        scale_percent = 40  # Adjust this value to change the scaling percentage
        width = int(img.shape[1] * scale_percent / 100)
        height = int(img.shape[0] * scale_percent / 100)
        resized_image = cv2.resize(img, (width, height), interpolation=cv2.INTER_AREA)

        # Save the resized image
        resized_image_path = "resized_image.jpg"
        cv2.imwrite(resized_image_path, resized_image)

        # Add the last page if there are remaining identities
        if op:
            pages.append((op, resized_image_path))

        # Generate the PDF with identified identities and output frames
        if pages:
            output_dir = os.path.dirname(image_path)
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            output_file = os.path.join(output_dir, f"op_{timestamp}.pdf")
            write_to_pdf(pages, output_file)
            return output_file, None

        return None, "No faces detected or recognized."

    except Exception as e:
        return None, str(e)
@app.route('/download-pdf/<pdf_filename>', methods=['GET'])
def download_pdf(pdf_filename):
    try:
        pdf_path = os.path.join(app.root_path, pdf_filename)
        if os.path.exists(pdf_path):
            response = make_response(send_file(pdf_path, as_attachment=True))
            response.headers['Content-Disposition'] = f'attachment; filename="{pdf_filename}"'
            response.headers['Content-Type'] = 'application/pdf'
            return response
        else:
            return jsonify({'error': 'PDF file not found.'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/process-image', methods=['POST'])
def process_image_route():
    try:
        # Receive image data from the request
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided.'}), 400

        image_file = request.files['image']

        # Save the received image to a temporary file
        image_path = 'temp_image.jpg'
        image_file.save(image_path)

        # Process the image and generate the PDF
        output_file, error = process_image(image_path)

        if output_file:
            return jsonify({'pdf_path': output_file}), 200
        else:
            return jsonify({'error': error}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)