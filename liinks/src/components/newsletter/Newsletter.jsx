import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <p>Stay up to date</p>
        </div>
        <div className="newsletter-input">
          <input type="email" placeholder="Email Address...." />
          <button className="arrow-btn">&#10140;</button>
        </div>
        <div className="newsletter-subtext">
          <p>Sign up for product updates</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
