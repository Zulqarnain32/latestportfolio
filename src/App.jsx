import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navbar from './Navbar'
import Home from './Home';
import Features from './Features';
import Project from './Project';
import Buttons from './Buttons';
import Contact from './Contact';
import Footer from './Footer';
import ScrolToTopComponent from './ScrolToTop';

const App = () => {
  return (
    <>
      <Navbar/>
      <ScrolToTopComponent/>
      <Home/>
      <Features/>
      <Project/>
      <Buttons/>
      <Contact/>
      <Footer/>
    </>
    
  )
}

export default App
