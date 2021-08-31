import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Projects from './projects/Projects';
import NavBar from './navbar/NavBar'
import './App.css';
//vercel --prod

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/' component={About} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
