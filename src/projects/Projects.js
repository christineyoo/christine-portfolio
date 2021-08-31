import React, { Component } from 'react';
import './Projects.css';
import sweetbloom from '../images/sweetbloom.png';
import collab from '../images/collab.png';
import lumina from '../images/lumina.png';

class Projects extends Component {
  render() {
    return (
      <div id='projects'>
        <div className='heading-flex'>
            <div className='square'></div>
            &nbsp;
            &nbsp;
            <h1 className='heading-flex-child'>Projects</h1>
        </div>

        <div className='projects-flex'>
          <div className='projects-flex-2'>
            <a
              href={'https://sweet-bloom.vercel.app/'}
              target={'_blank'}
              rel={'noreferrer'}
              className='project-screenshot-link'
            >
              <img
                src={sweetbloom}
                height='600px'
                alt='sweetbloom'
                className='project-screenshot'
              />
            </a>
          </div>
          <div className='projects-flex-1'>
            <h2>Sweet Bloom</h2>
            <p>
              Sweet Bloom is an e-commerce (business-to-consumer) application
              that enables users to view products and read, create, update and
              delete a review for any product. This app is for anyone who wants
              to shop for flowers and desserts online. I built this app to
              understand what goes behind building an e-commerce app, which is
              ubiquitous in this day and age.
            </p>
            <p>
              <strong>Skills/Tech used:</strong>
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>Testing with Jest, Mocha and Chai</li>
              <li>Git</li>
            </ul>
            <a
              href={'https://github.com/christineyoo/sweet-bloom'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <i class='fab fa-github'></i>&nbsp;
              <strong>GitHub repository here</strong>
            </a>
          </div>
        </div>
        <div className='projects-flex'>
          <div className='projects-flex-2'>
            <a
              href={'https://collab-app-smoky.vercel.app/'}
              target={'_blank'}
              rel={'noreferrer'}
              className='project-screenshot-link'
            >
              <img
                src={collab}
                height='600px'
                alt='collab'
                className='project-screenshot'
              />
            </a>
          </div>
          <div className='projects-flex-1'>
            <h2>Collab</h2>
            <p>
              Collab is a productivity app that helps members within a team
              increase their efficacy by enabling intra- and
              inter-collaboration. Users are able to perform CRUD operations on
              a post and also add or delete comments. The inspiration behind
              this app was to create a means of communication that is more
              streamlined and organized than traditional emails.
            </p>
            <p>
              <strong>Skills/Tech used:</strong>
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>Testing with Jest, Mocha and Chai</li>
              <li>Git</li>
            </ul>
            <a
              href={'https://github.com/christineyoo/collab-app'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <i class='fab fa-github'></i>&nbsp;
              <strong>GitHub repository here</strong>
            </a>
          </div>
        </div>
        <div className='projects-flex'>
          <div className='projects-flex-2'>
            <a
              href={'https://christineyoo.github.io/nasa-app/'}
              target={'_blank'}
              rel={'noreferrer'}
              className='project-screenshot-link'
            >
              <img
                src={lumina}
                height='600px'
                alt='lumina'
                className='project-screenshot'
              />
            </a>
          </div>
          <div className='projects-flex-1'>
            <h2>LUMINA</h2>
            <p>
              This app enables anyone to see the Astronomy Picture of the Day
              (APOD) and learn more about outer space by searching for terms in
              the NASA image and video library. Users may simply search a term
              of interest and scroll through all that there is to learn about
              our fascinating universe! The purpose of this project was to
              practice implementing asynchronous code by fetching data from two
              different NASA API endpoints.
            </p>
            <p>
              <strong>Skills/Tech used:</strong>
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>NASA APOD API</li>
              <li>NASA Image and Video Library API</li>
              <li>Git</li>
            </ul>
            <a
              href={'https://github.com/christineyoo/nasa-app'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <i class='fab fa-github'></i>&nbsp;
              <strong>GitHub repository here</strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
