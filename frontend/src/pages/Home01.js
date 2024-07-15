import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../images/facetrack.jpg";
import axios from 'axios';

const HomePage = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pdfPath, setPdfPath] = useState(null);
  

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  
  const handleSubmit = async () => {
    if (image) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('image', image);
      try {
        const response = await axios.post('http://localhost:5000/process-image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.status === 200) {
          setPdfPath(response.data.pdf_path);
        } else {
          console.error('Failed to process image:', response.statusText);
        }
      } catch (error) {
        console.error('Error processing image:', error);
      }

      setIsLoading(false);
    } else {
      alert('Please select an image file');
    }
  };

  const handleDownload = async () => {
    try {
      const downloadResponse = await axios.get(`http://localhost:5000/download-pdf/${encodeURIComponent(pdfPath)}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([downloadResponse.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };


  const renderTopButtons = () => (
    <>
      <Link to="/help">
      <button className="top-button">Help</button>
      </Link>
      <Link to="/about">
        <button className="top-button">About</button>
      </Link>
     {/* <Link to="/sign-up">
    <button className="top-button">Sign Up</button>
  </Link> */}

    </>
  );

  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="top-buttons">{renderTopButtons()}</div>
      <div className="content">
        <h1 className="face-track">FaceTrack</h1>
        <div className="input-box">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Submit'}
          </button>
        </div>
        {pdfPath && (
           <div className="input-box1"> 
            <p>Image Processed Successfully!</p>
            <button onClick={handleDownload}>Download Report</button>
           </div>
        )} 
      </div>
          
      <style>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-size: cover;
          background-position: center;
        }

        .top-buttons {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 50px;
        }

        .top-button {
          margin-left: 10px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .top-button:hover {
          background-color: #0056b3;
        }

        .content {
          text-align: center;
        }

        .face-track {
          font-size: 100px;
          font-weight: bold;
          margin-bottom: 50px;
          color: #333;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .input-box {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        .input-box1 {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        input[type='file'] {
          margin-bottom: 10px;
        }

        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default HomePage;