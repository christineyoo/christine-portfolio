import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='nav-flex'>
        <p className='nav-flex-1 nav-flex-1-left'>Christine Yoo / FULL STACK DEVELOPER</p>
        <p className='nav-flex-1'>ABOUT ME RESUME PROJECTS CONTACT</p>
      </nav>
    );
  }
}

export default NavBar;
