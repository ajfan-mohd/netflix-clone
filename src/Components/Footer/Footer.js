import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="row">
       
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Netflix Originals</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ul className="footer-links">
            <li><a href="#">Account</a></li>
            <li><a href="#">Redeem Gift Cards</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ul className="footer-links">
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Buy Gift Cards</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>
        </div>
      </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
