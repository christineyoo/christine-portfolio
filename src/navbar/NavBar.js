import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='flex'>
        <p className='flex-1'>Christine</p>
        <p className='flex-1'>Projects</p>
        <p className='flex-1'>Contact</p>
      </nav>
    );
  }
}

export default NavBar;
