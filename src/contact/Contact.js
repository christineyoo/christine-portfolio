import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div id='contact'>
        <h1>Contact</h1>
        <h2>
          If you're looking to hire a new developer or just want to chat, it
          would be great to hear from you. Please feel free to contact or follow
          me.
        </h2>
        <form action='https://formspree.io/f/xdopyaql' method='POST'>
          <label for='name'>Name</label>
          <input id='form-name' type='text' name='name' required />
          <br />
          <label for='email'>Email</label>
          <input id='email' type='text' name='email' required />
          <br />
          <label for='message'>Your message</label>
          <textarea name='message' id='message' required></textarea>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
