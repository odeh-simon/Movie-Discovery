import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-media-icons">
        {/* Add your social media icons and links here */}
        <a href="https://web.facebook.com/simon.odeh.587" className="social-icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://web.facebook.com/simon.odeh.587" className="social-icon">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://web.facebook.com/simon.odeh.587" className="social-icon">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://web.facebook.com/simon.odeh.587" className="social-icon">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-links">
        <a href="https://web.facebook.com/simon.odeh.587">Conditions of Use</a>
        <a href="https://web.facebook.com/simon.odeh.587">Privacy Policy</a>
        <a href="https://web.facebook.com/simon.odeh.587">Press Room</a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Simon Odeh. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
