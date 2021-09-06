import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm('xdopyaql');

  if (state.succeeded) {
    return (
      <>
        <div id='contact'>
          <div className='heading-flex'>
            <div className='square'></div>
            &nbsp;
            &nbsp;
            <h1 className='heading-flex-child'>Contact</h1>
          </div>
          <h3>Thanks, your message was sent.</h3>
        </div>
      <div className='bg'></div>

      </>
    );
  }
  return (
    <>
      <div id='contact'>
        <div className='heading-flex'>
          <div className='square'></div>
          &nbsp;
          &nbsp;
          <h1 className='heading-flex-child'>Contact</h1>
        </div>
        <p>
          If you're looking to hire a new developer or just want to chat, it
          would be great to hear from you. Please feel free to contact or follow
          me.
        </p>

        <form onSubmit={handleSubmit}>
          <label for='name'>Your first &amp; last name</label>
          <input id='form-name' type='text' name='name' required />
          <ValidationError prefix='name' field='name' errors={state.errors} />
          <br />
          <label for='email'>Your email</label>
          <input id='email' type='email' name='email' required />
          <ValidationError prefix='email' field='email' errors={state.errors} />
          <br />
          <label for='message'>Your message</label>
          <textarea name='message' id='message' required />
          <ValidationError
            prefix='message'
            field='message'
            errors={state.errors}
          />
          <br />
          <button type='submit' disabled={state.submitting} className='blue-button'>
            SEND
          </button>
        </form>
      </div>
      <div className='bg'></div>
    </>
  );
}
