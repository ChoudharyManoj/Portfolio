import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myPic from '../assets/images/my pic.jpg'; // Import your image
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
                  <img src={myPic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
                      <a href="https://github.com/ChoudharyManoj" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                      <a href="https://www.linkedin.com/in/manoj-choudhary-204487243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Manoj Choudhary</h1>
                  <p>Currently a college student specializing in game development. Skilled in C#, Unreal Engine, and technical artistry, with a passion for creating immersive gaming experiences.</p>

          <div className="mobile_social_icons">
                      <a href="https://github.com/ChoudharyManoj" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                      <a href="https://www.linkedin.com/in/manoj-choudhary-204487243/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;