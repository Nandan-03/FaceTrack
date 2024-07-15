/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import backgroundImage from '../images/facetrack.jpg';
import { firebaseConfig } from '../config/firebase'; // Adjust the path as needed

// Initialize Firebase app once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Add additional user data if needed
        await saveUserDataToFirestore(userCredential.user.uid);

        setErrorMessage('');
        navigate('/homme'); // Ensure this matches your route
      } catch (error) {
        console.error('Error during sign-up:', error);
        setErrorMessage(error.message);
      }
    }
  };

  const saveUserDataToFirestore = async (userId) => {
    try {
      await addDoc(collection(firestore, 'users'), {
        userId: userId,
        name: name,
        email: email,
      });
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form onSubmit={handleSignUp}>
        <div className="login-form">
          <h2>Sign Up</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
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
          <div className="input-container">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit">Sign Up</button>
          <div className="already-registered">
            <Link to="/login">Already registered? Login</Link>
          </div>
        </div>
      </form>*/


      //Email verification to email after
 import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import backgroundImage from '../images/facetrack.jpg';
import { firebaseConfig } from '../config/firebase'; // Adjust the path as needed

// Initialize Firebase app once
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Send verification email
        await sendEmailVerification(userCredential.user);

        // Add additional user data if needed
        await saveUserDataToFirestore(userCredential.user.uid);

        setErrorMessage('');
        navigate('/homme'); // Ensure this matches your route
      } catch (error) {
        console.error('Error during sign-up:', error);
        setErrorMessage(error.message);
      }
    }
  };

  const saveUserDataToFirestore = async (userId) => {
    try {
      await addDoc(collection(firestore, 'users'), {
        userId: userId,
        name: name,
        email: email,
      });
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form onSubmit={handleSignUp}>
        <div className="login-form">
          <h2>Sign Up</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
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
          <div className="input-container">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit">Sign Up</button>
          <div className="already-registered">
            <Link to="/login">Already registered? Login</Link>
          </div>
        </div>
      </form>

      <style>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-size: cover;
          background-position: center;
        }

        .login-form {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(10, 10, 10, 0.15);
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
          margin-bottom: 10px;
        }

        .already-registered {
          text-align: center;
          margin-top: 10px;
        }

        .already-registered a {
          color: #007bff;
          text-decoration: underline;
        }

        .already-registered a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;