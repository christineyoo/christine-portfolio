import React, { Component } from 'react';
import './Projects.css';
import sweetbloom from '../images/sweetbloom.png';
import collab from '../images/collab.png';
import lumina from '../images/lumina.png';

class Projects extends Component {
  render() {
    return (
      <div id='projects'>
        <h1>Projects</h1>
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
              <strong>Skills/Tech used:</strong> HTML/CSS, Javascript, React,
              Node, Express, PostgreSQL, Git, Vercel, Heroku, testing with Jest
              and Mocha/Chai
            </p>
            <a
              href={'https://github.com/christineyoo/sweet-bloom'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <strong className='github'>GitHub repository here</strong>
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
              Collab is a productivity app that helps teachers increase their
              efficacy by enabling intra- and inter-collaboration amongst course
              teams. In a general sense, Collab could be used for members of
              teams within a larger enterprise working towards a common goal.
              Users are able to read, create, update, and delete a post and also
              add or delete comments. The inspiration behind this app was to
              create a means of communication that is more streamlined and
              organized than traditional emails.
            </p>
            <p>
              <strong>Skills/Tech used:</strong> HTML/CSS, Javascript, React,
              Gimp, Node, Express, PostgreSQL, Git, Vercel, Heroku, testing with
              Jest and Mocha/Chai
            </p>
            <a
              href={'https://github.com/christineyoo/collab-app'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <strong className='github'>GitHub repository here</strong>
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
              <strong>Skills/Tech used:</strong> HTML/CSS, JavaScript, jQuery,
              NASA APOD API, NASA Image and Video Library API, Git
            </p>
            <a
              href={'https://github.com/christineyoo/nasa-app'}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <strong className='github'>GitHub repository here</strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
