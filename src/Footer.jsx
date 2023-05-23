import React from 'react'
import { NavLink } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <>
       <hr className='line '/>
        <div className="container width foter mt-4">
            <div className="row mt-4 ">
               <div className="col-md-3">
                <div className="footer-logo">
                   <span><img src="/assets/logo.png" alt="logo-image" className='logo-f-img logo-img'/></span>
                </div>
                <div className="social-media-icons mt-4">
                            <div>
                            <NavLink to = "https://www.facebook.com/zulqarnain.chohan.16">
                            <FaFacebook className='social-icons'/></NavLink>
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

               <div className="col-md-3">
                  <div className="quicklinks">
                    <h2 className='main-head'>Quick Links</h2>
                    <div className='myulf'>
                       <div>Home</div>
                       <div>Portfolio</div>
                       <div>Services</div>
                       <div>Blogs</div>
                       <div>Contact</div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="quicklinks">
                    <h2 className='main-head'>Resoucres</h2>
                    <div className='myulf'>
                       <div>Authentication</div>
                       <div>System Services</div>
                       <div>Terms of Services</div>
                       <div>Pricing</div>
                       <div>Over Right</div>
                    </div>
                  </div>
               </div>
               <div className="col-md-3">
                  <div className="quicklinks">
                    <h2 className='main-head'>Developers</h2>
                    <div className='myulf'>
                       <div>Documentation</div>
                       <div>Authentication</div>
                       <div>API Reference</div>
                       <div>Support</div>
                       <div>Open Source</div>
                    </div>
                  </div>
               </div>
            </div>
        </div>
       <hr className='line  '/>
       <div className="copyright text-center text-white mb-3">
        ©️ 2023 All right reserved by CHOHAN
       </div>
     
    </>
  )
}

export default Footer
