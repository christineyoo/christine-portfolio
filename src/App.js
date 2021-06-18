import React, { Component } from 'react';
import About from './about/About';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import NavBar from './navbar/NavBar';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </>
    );
  }
}

export default App;
