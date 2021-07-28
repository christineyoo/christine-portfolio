import React, { Component } from 'react';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Landing from './landing/Landing';
import Projects from './projects/Projects';
import Map from './map/Map';
import './App.css';
//vercel --prod

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Landing />
        </header>
        <main>
          <About />
          <Projects />
          <Contact />
          <Map />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
