import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../images/facetrack.jpg";

const HelpPage = () => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Question:', question);
    // Add logic to handle user's question
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Link to="/home" className="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
        </svg>
      </Link>
      <div className="login-form">
        <h2>Need a hand?</h2>
        <div className="contact-info">
          <p>We're here to help. If you have any questions or need assistance, feel free to reach out to us:</p>
          <ul className="email-list">
            <li><a href="mailto:mspc.csb2125@saintgits.org" className="email-link">mspc.csb2125@saintgits.org</a></li>
            <li><a href="mailto:na.csb2125@saintgits.org" className="email-link">na.csb2125@saintgits.org</a></li>
            <li><a href="mailto:nsn.csb2125@saintgits.org" className="email-link">nsn.csb2125@saintgits.org</a></li>
            <li><a href="mailto:lisbeth.csb2125@saintgits.org" className="email-link">lisbeth.csb2125@saintgits.org</a></li>
          </ul>
        </div>
      </div>

      <style>{`
      .home-button {
        position: absolute;
        top: 20px;
        left: 20px;
        color: white;
        text-decoration: none;
        z-index: 1000; /* Ensure it's above other content */
      }
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-size: cover;
          background-position: center;
        }

        .login-form {
          background-color: rgba(255, 255, 255, 0);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(10, 10, 10, 15);
          max-width: 400px;
          margin: 0 auto;
        }

        .login-form h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .contact-info {
          margin-bottom: 20px;
          text-align: center; /* Center align the contact info */
        }

        .contact-info p {
          margin-bottom: 10px;
        }

        .email-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex; /* Display the list items horizontally */
          flex-direction: column; /* Stack the list items vertically */
          align-items: center; /* Center align the list items */
        }

        .email-list li {
          margin-bottom: 10px;
        }

        .email-link {
          color: #333; /* Change the link color to a darker shade */
          text-decoration: none;
        }

        .email-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default HelpPage;