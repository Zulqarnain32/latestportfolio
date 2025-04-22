import React from 'react'
import { NavLink } from "react-router-dom"
import { useTypewriter } from 'react-simple-typewriter'
import { BsGithub } from "react-icons/bs"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
const Home = () => {
    const [text] = useTypewriter({
        words: ['MERN  Developer', 'Full Stack Developer', 'Frontend Developer'],
        loop: 0,
        cursorStyle:"-",
        cursorColor:"red",
        typeSpeed:60,
        deleteSpeed:20,
        delaySpeed:1000,
        
      })
  return (
    <div id='home'>
       <div className="container mt-5">
         <div className="row mt-5">
            <div className="col-12 mx-auto  mt-5">
                <div className="row mt-5 land">
                    <div className="col-md-6 col-12 mx-auto  order-2 order-md-1">
                       <div className="left">
                       <h4>This is me </h4>
                        <h2 className='title'>I am a <span className='dynamic-text'>{text}</span></h2>
                        <p className='about-text mb-4'> Dedicated web developer committed to delivering pixel-perfect designs and clean, efficient code.I bring creativity and technical prowess to every project, ensuring exceptional outcomes. Let's elevate your online presence together</p>
                        <h4 className='mt-5 find'>Find me in</h4>
                        <div className="social-media-icons mt-4">
                            <div>
                            <NavLink to = "https://www.facebook.com/zulqarnain.chohan.16">
                            <FaFacebook className='social-icons'/></NavLink>
                            </div>
                            <div>
                            <NavLink target='_' to = "https://www.linkedin.com/in/zulqarnain-chohan/">
                            <FaLinkedin className='social-icons'/></NavLink>
                            </div>
                            <div>
                            <NavLink target='_' to = "https://github.com/Zulqarnain32">
                            <BsGithub  className='social-icons'/></NavLink>
                            </div>
                            <div>
                            <NavLink to = "https://twitter.com/ZulqarnainChoh5">
                            <FaTwitter className='social-icons'/></NavLink>
                            </div>
                            <div>
                            <NavLink to = "https://www.instagram.com/zulqarnainchohan5/">
                            <FaInstagram className='social-icons'/></NavLink>
                            </div>  
                          </div>
                       </div>
                    </div>
                    <div className="col-md-6 col-12  order-1 order-md-2">
                      <div className="right">
                         <img src="/assets/finalimg.png" alt="" className='landing-page-img'/>
                      </div>
                    </div>
                </div>
            </div>
         </div>
       </div> 
   
    </div>
  )
}

export default Home
