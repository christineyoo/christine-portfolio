import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h1>Hi, I'm Christine.</h1>
        <p>
          I'm a full stack web developer located in Redondo Beach, CA with four
          years of experience teaching high school math. I recently graduated
          from Thinkful's Software Engineering program where I studied web
          development using HTML/CSS, React, Node, Express, and PostgreSQL.
        </p>
        <p>
          In addition to those skills, my previous work in education gives me an
          extra edge when it comes to developing solutions within a team since I
          learned the importance of setting a game plan beforehand, adjusting
          based on new developments, and streamlining communication amongst
          stakeholders. When I'm not in front of my computer, I like to explore
          the beautiful South Bay area with my husband and my energetic
          Schnoodle, Fluffy.
        </p>
      </div>
    );
  }
}

export default About;
