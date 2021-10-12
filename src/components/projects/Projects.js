import React, { useState } from 'react'
import './Projects.css'
import sweetbloom from '../../images/sweetbloom.png'
import collab from '../../images/collab.png'
import lumina from '../../images/lumina.png'

function Projects() {
  const [slide, setSlide] = useState(0)

  const goToNextSlide = () => {
    setSlide((slide + 1) % 3)
  }

  return (
    <>
      <div className='slider'>
        <div className={slide === 0 ? 'slide current' : 'slide'}>
          <div className='content'>
          <h2>Sweet Bloom</h2>
            <p>
              Sweet Bloom is an e-commerce (business-to-consumer) application
              that enables users to view products and read, create, update and
              delete a review for any product. This app is for anyone who wants
              to shop for flowers and desserts online. The motivation behind this project was to understand the system design for an eCommerce application. The languages and technologies used to build Sweet Bloom include:
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL/PostgreSQL</li>
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
              <i className='fab fa-github'></i>&nbsp;
              <strong>GitHub repository here</strong>
            </a>
          </div>
        </div>
        <div className={slide === 1 ? 'slide current' : 'slide'}>
          <div className='content'>
          <h2>Collab</h2>
            <p>
              Collab is a productivity app that helps members within a team
              increase their efficacy by enabling intra- and
              inter-collaboration. Users are able to perform CRUD operations on
              a post and also add or delete comments. The inspiration behind
              this app was to create a means of communication that is more
              streamlined and organized than traditional emails. The languages and technologies used to build Collab include:
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL/PostgreSQL</li>
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
              <i className='fab fa-github'></i>&nbsp;
              <strong>GitHub repository here</strong>
            </a>
          </div>
        </div>
        <div className={slide === 2 ? 'slide current' : 'slide'}>
          <div className='content'>
          <h2>LUMINA</h2>
            <p>
              This app enables anyone to see the Astronomy Picture of the Day
              (APOD) and learn more about outer space by searching for terms in
              the NASA image and video library. Users may simply search a term
              of interest and scroll through all that there is to learn about
              our fascinating universe! The purpose of this project was to
              practice implementing asynchronous code by fetching data from two
              different NASA API endpoints. The languages and technologies used to build LUMINA include:
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
              <i className='fab fa-github'></i>&nbsp;
              <strong>GitHub repository here</strong>
            </a>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <button id='prev' onClick={() => goToNextSlide()}>
          <i className='fas fa-arrow-left'></i>
        </button>
        <button id='next' onClick={() => goToNextSlide()}>
          <i className='fas fa-arrow-right'></i>
        </button>
      </div>
      {/* <div id='projects'>
        <div className='heading-flex'>
            <div className='square'></div>
            &nbsp;
            &nbsp;
            <h1 className='heading-flex-child'>Projects</h1>
            <a
              href='https://drive.google.com/file/d/1O9L5XbYPKsNoIReMLTbkDis85uFaFVfH/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='heading-flex-child-right'
            >
              <button className='blue-button'>RESUME</button>
            </a>
        </div>

        <div className='projects-flex'>
            <a
              href={'https://sweet-bloom.vercel.app/'}
              target={'_blank'}
              rel={'noreferrer'}
              className='project-screenshot-link'
            >
              <img
                src={sweetbloom}
                alt='sweetbloom'
                className='project-screenshot'
              />
            </a>
          <div className='projects-flex-1'>
            
          </div>
        </div>
        <div className='projects-flex'>
            <a
              href={'https://collab-app-smoky.vercel.app/'}
              target={'_blank'}
              rel={'noreferrer'}
              className='project-screenshot-link'
            >
              <img
                src={collab}
                alt='collab'
                className='project-screenshot'
              />
            </a>
          <div className='projects-flex-1'>
            
          </div>
        </div>
        <div className='projects-flex'>
            <a
              href={'https://christineyoo.github.io/nasa-app/'}
              target={'_blank'}
              rel={'noreferrer'}
              className='project-screenshot-link'
            >
              <img
                src={lumina}
                alt='lumina'
                className='project-screenshot'
              />
            </a>
          <div className='projects-flex-1'>
            
          </div>
        </div>
      </div> */}
      <div className='bg'></div>
    </>
  )
}
export default Projects
