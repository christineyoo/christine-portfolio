import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  render() {
    return (
      <>
        <div id='contact'>
          <h1>contact</h1>
          <h2>
            If you're looking to hire a new developer or just want to chat, it
            would be great to hear from you. Please feel free to contact or
            follow me.
          </h2>
          <div className='contact-buttons'>
            <a href='mailto:christinecho.s@gmail.com'>
              <button className='button-flex-1'>Email</button>
            </a>
            <a
              href='https://docs.google.com/document/d/1uKNZGoU0uOLRKIDvVtgOIyZwP6GBBRyNO47CM_0wTpA/edit?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <button className='button-flex-1'>Resume</button>
            </a>
          </div>
          <div className='contact-buttons'>
            <a
              href='https://www.linkedin.com/in/christine-yoo-cy/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='button-flex-1'>LinkedIn</button>
            </a>
            <a
              href='https://github.com/christineyoo'
              target='_blank'
              rel='noreferrer'
            >
              <button className='button-flex-1'>GitHub</button>
            </a>
          </div>
        </div>
        <button id='scroll-to-top' onClick={() => this.scrollToTop()}>
          Back to the top
        </button>
      </>
    );
  }
}

export default Contact;
