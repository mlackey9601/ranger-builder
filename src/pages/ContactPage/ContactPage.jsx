import './ContactPage.css'
import React from 'react';

const ContactPage = () => {
  return (
    <div className="ContactPage">
        <header className="contact-heading">Contact</header>
        &nbsp;&nbsp;&nbsp;
        <div className="contact-container">
          <div>
            <img className="contact-img" alt="knight" src="https://i.imgur.com/gwdv2jq.jpg"></img>
          </div>
          <div className="contact-content">
            <div className="contact-email">
              For any questions, suggestions, or error reporting, please contact me at: <a href="mailto: devoftheshadowdeep@gmail.com" className="link" target="_blank" rel="noopener noreferrer">devoftheshadowdeep@gmail.com</a>
            </div>
            <div className="contact-links">
              Please visit my <a href="https://www.michaellackey.com" className="link" target="_blank" rel="noopener noreferrer">personal website</a>, <a href="https://github.com/mlackey9601" className="link" target="_blank" rel="noopener noreferrer">GitHub</a>, or connect with me on <a href="https://www.linkedin.com/in/michaelglackey/" className="link" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </div>
            <div className="contact-projects">
              Try out my paint management app, <a href="https://battlebrush.herokuapp.com/" className="link" target="_blank" rel="noopener noreferrer">Battle Brush</a>!
            </div>
          </div>
        </div>
    </div>
  )
}
 
export default ContactPage;
