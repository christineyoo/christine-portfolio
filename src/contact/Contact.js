import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm('xdopyaql');

  if (state.succeeded) {
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
            <a
              href='https://docs.google.com/document/d/1uKNZGoU0uOLRKIDvVtgOIyZwP6GBBRyNO47CM_0wTpA/edit?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <button className='button-flex-1'>Resume</button>
            </a>
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
          <h1>Thanks, your message was sent!</h1>
        </div>
        <button
          id='scroll-to-top'
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        >
          Back to the top
        </button>
      </>
    );
  }
  return (
    <>
      <div id='contact'>
        <h1>contact</h1>
        <h2>
          If you're looking to hire a new developer or just want to chat, it
          would be great to hear from you. Please feel free to contact or follow
          me.
        </h2>
        <div className='contact-buttons'>
          <a
            href='https://docs.google.com/document/d/1uKNZGoU0uOLRKIDvVtgOIyZwP6GBBRyNO47CM_0wTpA/edit?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <button className='button-flex-1'>Resume</button>
          </a>
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

        <form onSubmit={handleSubmit}>
          <label for='name'>Your name</label>
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
          <button type='submit' disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <button
        id='scroll-to-top'
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }
      >
        Back to the top
      </button>
    </>
  );
}
