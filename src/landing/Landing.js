import React from 'react';
import './Landing.css';
import { Spring } from 'react-spring';

export default function Landing() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div id='landing' style={props}>
          <div id='name'>
            <h1 id='fade-in-h1'>christine yoo</h1>
            <h2 id='fade-in-h2'>full stack developer</h2>
          </div>
        </div>
      )}
    </Spring>
  );
}
