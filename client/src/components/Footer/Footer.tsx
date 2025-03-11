import React from 'react';
import './Footer.css';
import instagram_icon from "../assets/instagram.png";
import facebook_icon from "../assets/facebook.png";
import twitter_icon from "../assets/twitter.png";

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      
      
      <div className='footer-social-icons'>
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
          <img src={facebook_icon} alt="Facebook" />
          <img src={twitter_icon} alt="Twitter" />
        </div>
        <div className="footer-icons-container">
          <p>Follow us on Social Media</p>
        </div>
      </div>
      <ul className='footer-links'>
        <li>Shipping</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Contact</li>
      </ul>
      <div className="footer-copyright">
        <hr />
        <p>&copy;2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;