import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others?</h1>
      </div>
        <div className="gpt3__footer-btn">
          <p>
            Request Early Access
          </p>
        </div>

        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="logo"/>
            <p>Be A part of the Future Today</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>SocialMedia</p>
            <p>Counters</p>
            <p>Contacts</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Get in Touch</h4>
            <p>info@gpt3.net</p>
            <p>011-7362946</p>
            <p>03-54836173</p>
          </div>

        </div>

        <div className="gpt3__footer-copyright">
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
