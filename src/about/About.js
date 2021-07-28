import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h1>Hi, I'm Christine.</h1>
        <p>
          I'm a full stack web developer with four
          years of experience teaching high school math. I graduated
          from{' '}
          <a href='https://www.thinkful.com/' target='_blank' rel='noreferrer'>
            Thinkful's Software Engineering program
          </a>{' '}
          where I studied web development using JavaScript, HTML/CSS, React, Node, Express, SQL,
          and PostgreSQL. I am currently extending my education by learning about AWS.
        </p>
        <p>
          In addition to those skills, my previous work in education gives me an
          extra edge when it comes to developing solutions within a team since I
          learned the importance of setting a game plan before execution, adjusting
          based on new developments, and streamlining communication amongst
          stakeholders. When I'm not in front of my computer, I like to explore California's beautiful coast with my husband and energetic Schnoodle, Fluffy.
        </p>
      </div>
    );
  }
}

export default About;
