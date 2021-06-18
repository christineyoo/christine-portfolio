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
          <form action='https://formspree.io/f/xdopyaql' method='POST'>
            <label for='name'>Name</label>
            <input id='form-name' type='text' name='name' required />
            <br />
            <label for='email'>Email</label>
            <input id='form-email' type='text' name='email' required />
            <br />
            <label for='message'>Your message</label>
            <textarea name='form-message' id='message' required></textarea>
            <br />
            <button id='form-button' type='submit'>
              Submit
            </button>
          </form>
        </div>
        <button id='scroll-to-top' onClick={() => this.scrollToTop()}>
          Back to the top
        </button>
      </>
    );
  }
}

export default Contact;
