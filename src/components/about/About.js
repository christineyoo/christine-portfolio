import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import christine from '../../images/christine.jpg';

class About extends Component {
  render() {
    return (
      <>
        <div id='about' className='about-flex'>
          <div className='about-flex-1'>
            <img src={christine} height='250px' alt='Christine' id='profile' />
            <h2>Christine Yoo</h2>
            <hr />
            <p id='position'>FULL STACK DEVELOPER</p>
            <div id='social'>
              <a
                href='https://www.linkedin.com/in/christine-yoo-cy/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
              &nbsp; &nbsp;
              <a
                href='https://github.com/christineyoo'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
              &nbsp; &nbsp;
              <a href='mailto:christinecho.s@gmail.com'>
                <i class='far fa-envelope'></i>
              </a>
            </div>
          </div>
          <div className='about-flex-2'>
            <h1 id='about-h1'>Hello</h1>
            <h2>Here's who I am &amp; what I do</h2>
            <a
              href='https://drive.google.com/file/d/1zGLU8YfqqN6hUm6Pj0JFyEwRRX4R-s8k/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <button className='blue-button'>RESUME</button>
            </a>
            <Link to={'/projects'}>
              <button className='clear-button'>PROJECTS</button>
            </Link>
            <p>
              I'm a full stack web developer passionate about leveraging a collaborative approach to create a seamless user experience from front to back. I graduated from{' '}
              <a
                href='https://www.thinkful.com/'
                target='_blank'
                rel='noreferrer'
              >
                Thinkful's Software Engineering program
              </a>{' '}
              where I studied full stack web development using frontend libraries (React, jQuery) in JavaScript, backend frameworks (Node.js, Express), database management systems (PostgreSQL) and unit testing frameworks (Mocha, Jest) to create complex, reliable full stack web applications. It is undeniable how integral web and mobile applications are in the fabric of our society, and I believe that there is still much to develop and tap into. That's what excites me to work in this field.
            </p>
            <p>
              I have a strong background in mathematics and education, bringing in four years of cumulative professional experience. I have a passion for problem-solving and working with teammates who share that same enthusiasm.
            </p>
          </div>
        </div>
        <div id='background'></div>
      </>
    );
  }
}

export default About;
