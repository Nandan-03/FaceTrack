import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { confirmPasswordReset } from 'firebase/auth';
import { auth } from '../config/firebase';
import backgroundImage from '../images/facetrack.jpg';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const oobCode = query.get('oobCode');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      try {
        await confirmPasswordReset(auth, oobCode, password);
        setErrorMessage('');
        setSuccessMessage('Password has been reset successfully. You can now log in with your new password.');
        navigate('/login');
      } catch (error) {
        console.error('Error resetting password:', error);
        setErrorMessage('Failed to reset password. Please try again.');
      }
    }
  };

  return (
<div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Link to="/home" className="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
        </svg>
      </Link>
      <div className="login-form">
        <h2>Reset Password</h2>
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
              placeholder="New Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <button type="submit" disabled={!!errorMessage}>Reset Password</button>
          <div className="already-registered">
            <Link to="/login">Click Here to Login</Link>
          </div>
        </form>
      </div>

            <style>{`
              .home-button {
                position: absolute;
                top: 20px;
                left: 20px;
                color: white;
                text-decoration: none;
                z-index: 1000;
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
              .error-message {
                color: red;
                text-align: center;
                margin-top: 10px;
              }
              .success-message {
                color: green;
                text-align: center;
                margin-top: 10px;
              }
              .already-registered {
                display: flex;
                justify-content: center;
                margin-top: 10px;
              }
              .already-registered a {
                color: #007bff;
                text-decoration: underline;
              }
            `}</style>
          </div>
        );
      };
      
      export default ResetPasswordPage;