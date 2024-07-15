/*import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import backgroundImage from "..//images/facetrack.jpg" // Import the background image

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
      navigate('/homme');
    } catch (error) {
      alert('Invalid credentials. Please sign up.');
      console.error('Error logging in:', error);
    }
  };

  const handleForgotPassword = () => {
    // Redirect to the forgot password page
    // You can implement the redirect logic here
    // For example, using React Router or window.location.href
    console.log('Redirecting to forgot password page');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link to="/home" className="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
</svg>
      </Link>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="forgot-password-container">
            <div className="forgot-password" >
            <Link to="/reset-password">Forgot Password?</Link>
            </div>
          </div>
        </form>
      </div>*/


     //Login with verified email
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import backgroundImage from '../images/facetrack.jpg';
import { firebaseConfig } from '../config/firebase'; // Adjust the path as needed
import { initializeApp } from 'firebase/app';

// Initialize Firebase app once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user.emailVerified) {
        navigate('/homme'); // Ensure this matches your route
      } else {
        setErrorMessage('Please verify your email before logging in.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form onSubmit={handleLogin}>
        <div className="login-form">
          <h2>Login</h2>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
<button type="submit">Login</button>
<div className="reset-password">
  <Link to="/reset-password">Forgot your password? Reset it here</Link>
</div>
</div>
</form>

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

        .input-container {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }

        .input-container input {
          display: block;
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }

        .login-form button {
          display: block;
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
        }

        .forgot-password-container {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .forgot-password {
          color: #007bff;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
