import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='nav-flex'>
        <p className='nav-flex-1'>Projects</p>
        <p className='nav-flex-1'>Contact</p>
      </nav>
    );
  }
}

export default NavBar;
