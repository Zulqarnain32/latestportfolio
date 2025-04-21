import React,{ useEffect, useState } from 'react'
import Home from './Home';
import Features from './Features';
import Project from './Project';
import Buttons from './Buttons';
import Contact from './Contact';
import Footer from './Footer';
import ScrolToTopComponent from './ScrolToTop';
// import { Link, NavLink } from "react-router-dom"
import {  GiHamburgerMenu,GiCrossedBones } from "react-icons/gi"
import { Link } from "react-scroll"

const Navbar = () => { 
  const [ showNavbar,setShowNavbar ] = useState(false);
  if(showNavbar){
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  useEffect(() => {
    const indicator = document.getElementById('indicator');

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolledHeight = window.scrollY;

      const scrolledPercent = (scrolledHeight / (fullHeight - windowHeight)) * 100;
      indicator.style.width = `${scrolledPercent}%`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  
  }, []);

const handleNav = () => {
  if(showNavbar){
    setShowNavbar(false)
  }
}




  return (
    <div className='greatest' onClick={handleNav}>
       <div className="container-wrapper ">
       <div className='mynavbar '>
         <input type="checkbox" id='check' className='mycheck'/>
         <label htmlFor="checked" className='menu-btn'><GiHamburgerMenu onClick={() => setShowNavbar(!showNavbar)}/></label>
         <label className="logo"><span><img src="/assets/logo.png" alt="logo-image" className='logo-img'/></span></label>
         

         <ul className = {`myul ${showNavbar && 'activehai'}`} id='sidebar'>
          <li>
            <GiCrossedBones className='removesidebar ' onClick={() => setShowNavbar(false)}/>
          </li>
            <li >
              
                <Link to="home" spy={true} smooth={true} offset={-150} duration={500} className="links" ><span onClick={() => setShowNavbar(false) }>Home</span></Link>
            </li> 
            <li>
                <Link to="features" spy={true} smooth={true} offset={-200} duration={500} className="links"><span onClick={() => setShowNavbar(false) }>Features</span></Link>
            </li> 
            <li>
                <Link to="projects" spy={true} smooth={true} offset={-120} duration={500} className="links"><span onClick={() => setShowNavbar(false) }>Projects</span></Link>
            </li> 
            <li>
                <Link to="resume" spy={true} smooth={true} offset={-300} duration={500} className="links"><span onClick={() => setShowNavbar(false) }>Resume</span></Link>
            </li> 
            {/* <li>
                <NavLink to = "" className="links">Testimonial</NavLink>
            </li>  */}
            <li>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="links"><span onClick={() => setShowNavbar(false) }>Contact</span></Link>
            </li> 
               
         </ul>
           
       </div> 
       </div>
       {/* navbar ens here */}
       <div id="indicator"></div>
       <ScrolToTopComponent/>
      <Home/>
      <Features/>
      <Project/>
      <Buttons/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default Navbar
