import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className='nav-flex'>
        <div className='square'></div>
        &nbsp;
        &nbsp;
        <div className='nav-flex'>
          <h1 className='nav-flex-1 nav-flex-1-left'>Christine Yoo</h1>
          &nbsp;
          <p className='nav-flex-1-left'> / FULL STACK DEVELOPER</p>
        </div>
        <div className='nav-flex-7'></div>
        <div className='nav-flex-1'>
          <NavLink exact to={'/'}
          activeStyle={{
            color: '#0050ff'
          }}>
            ABOUT
          </NavLink>
        </div>
        <div className='nav-flex-1'>
          <NavLink to={'/projects'}
          activeStyle={{
            color: '#0050ff'
          }}>
            PROJECTS
          </NavLink>
        </div>
        <div className='nav-flex-1'>
          <NavLink to={'/contact'}
          activeStyle={{
            color: '#0050ff'
          }}>
            CONTACT
          </NavLink>
        </div>  
      </nav>
    );
  }
}

export default NavBar;
