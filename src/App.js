import React, { Component } from 'react';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Landing from './landing/Landing';
import Projects from './projects/Projects';
import NavBar from './navbar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <Landing />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
