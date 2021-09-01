import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id='footer-container'>
        <footer>
          <p>Copyright &copy; {new Date().getFullYear()} Christine Yoo</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
