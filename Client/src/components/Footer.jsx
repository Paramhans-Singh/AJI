import React from 'react';
import "../styles/Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
          <div className="footer-logo">
            <div className='h2'>AJI</div>
          </div>
         
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
