import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/facetrack.jpg';
import teamMember1 from '../images/nandakrishnan.jpg';
import teamMember2 from '../images/suraij.jpg';
import teamMember3 from '../images/nandana.jpg';
import teamMember4 from '../images/lisbeth.jpeg';


const AboutPage = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Link to="/home" className="home-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
</svg>
      </Link>
      <div className="content">
        <h1 className="about">About Us</h1>
        <p className="about-paragraph">
          In today's world, the need for accurate crowd monitoring and identifying individuals is more critical than ever. Our project aims to address this need by providing a comprehensive facial recognition solution. FaceTrack, a pivotal web application with a user-friendly platform, ensures accurate and efficient identification. From managing student records in academic institutions to enhancing surveillance capabilities, it offers versatile solutions with wide-ranging applications.
        </p>
        <h2 className="team-heading">Our Team</h2>
        <div className="team-members">
          <div className="team-member-row">
            <div className="team-member">
              <img src={teamMember1} alt="Team Member 1" />
              <div className="member-details">
                <h3>Nandakrishnan A</h3>
                <p>Team Lead<br/>ML Developer</p>
                <a href="https://www.linkedin.com/in/nandakrishnana" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                </a>
              </div>
            </div>
          </div>
          <div className="team-member-row">
            <div className="team-member">
              <img src={teamMember2} alt="Team Member 2" />
              <div className="member-details">
                <h3>Muhammed Suraij pc</h3>
                <p>Web Developer</p>
                <a href="https://www.linkedin.com/in/muhammed-suraij-pc" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                </a>
              </div>
            </div>
            <div className="team-member">
               <img src={teamMember3} alt="Team Member 3" />
              <div className="member-details">
                <h3>Nandana S Nair</h3>
                <p>Web Developer</p>
                <a href="https://www.linkedin.com/in/nandana-s-nair" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                </a> 
              </div>
            </div>
            <div className="team-member">
              <img src={teamMember4} alt="Team Member 4" />
              <div className="member-details">
                <h3>Lisbeth Ajith</h3>
                <p>Web Developer</p>
                <a href="https://www.linkedin.com/in/lisbeth-ajith-ab3445228" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg> 
                </a>
              </div>
            </div>
          </div>
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
      .about{
        font-size: 40px;
      }
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 50px;
        }

        .content {
          text-align: center;
          max-width: 1200px;
        }

        .about-paragraph {
          max-width: 800px;
          margin: 0 auto 50px;
          font-size: 22px;
          line-height: 1.6;
          color: #555;
        }

        .team-heading {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 30px;
          color: #333;
        }

        .team-members {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .team-member {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          max-width: 600px;
          width: 100%;
        }

        .team-member img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 20px;
        }

        .member-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-grow: 1;
        }

        .member-details h3 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .member-details p {
          font-size: 16px;
          color: #777;
          margin-bottom: 10px;
        }

        .member-details a {
          color: #333;
          font-size: 16px;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .member-details a:hover {
          color: #007bff;
        }

        .member-details a i {
          font-size: 24px;
          margin-right: 5px;
        }

        .team-member-row {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;