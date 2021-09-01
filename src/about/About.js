import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import christine from '../images/christine.jpg';

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
              I'm a full stack web developer with four years of experience
              teaching high school math. I graduated from{' '}
              <a
                href='https://www.thinkful.com/'
                target='_blank'
                rel='noreferrer'
              >
                Thinkful's Software Engineering program
              </a>{' '}
              where I studied web development using JavaScript, HTML/CSS, React,
              Node, Express, SQL, and PostgreSQL. I am currently extending my
              education by learning more about data structures and algorithms.
            </p>
            <p>
              In addition to those skills, my previous work in education gives
              me an extra edge when it comes to developing solutions within a
              team since I learned the importance of setting a game plan before
              execution, adjusting quickly based on new developments, and
              streamlining communication amongst stakeholders. When I'm not in
              front of my computer, I like to explore California's beautiful
              coast with my husband and energetic Schnoodle, Fluffy.
            </p>
          </div>
        </div>
        <div id='background'></div>
      </>
    );
  }
}

export default About;
