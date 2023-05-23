import React from 'react'
import { FaEmpire, FaGithub } from "react-icons/fa"
const Project = () => {
  return (
    <div id='projects'>
       <div className="project-heading">
          <h1 className='text-center text-white'>My Projects</h1> 
       </div> 
       <div className="container width">
         <div className="row mx-auto features">
            <div className="col-md-4">
                <div className='first-box'>
                    <div className='text-center pt-3'><img src="/assets/ecommerece.jpg" className='wi' alt="imgi s" /></div>
                    <div className="first-title d-flex align-items-center justify-content-between mx-0 mt-3">
                        <div className='setfont'>Ecommerece Website</div>
                        <div className='project-icons'>
                            <span className="github"><FaGithub/></span>
                            <span className="demo "><FaEmpire/></span>
                        </div>
                    </div>
                    <p className='my-2 mx-0 pb-3'> Sleek ecommerce website with seamless checkout, product showcases, and enhanced user experience.</p>
                </div>
            </div>
            <div className="col-md-4">
               <div className='second-box'>
                    <div className='text-center pt-3'><img src="/assets/resume.jpg" className='wi' alt="imgi s" /></div>
                    <div className="first-title d-flex align-items-center justify-content-between mx-0 mt-3">
                        <div className='setfont'>Resume Generator</div>
                        <div className='project-icons'>
                            <span className="github"><FaGithub/></span>
                            <span className="demo "><FaEmpire/></span>
                        </div>
                    </div>
                    <p className='my-2 mx-0 pb-3'>Crafted a Resume Generator: user-friendly, customizable templates, and effortless export to polished resumes.</p>
                </div>
            </div>
            <div className="col-md-4">
               <div className='third-box'>
                    <div className='text-center pt-3'><img src="/assets/bill.jpg" className='wi' alt="imgi s" /></div>
                    <div className="first-title d-flex align-items-center justify-content-between mx-0 mt-3">
                        <div className='setfont'>Bill Calculator</div>
                        <div className='project-icons'>
                            <span className="github"><FaGithub/></span>
                            <span className="demo "><FaEmpire/></span>
                        </div>
                    </div>
                    <p className='my-2 mx-0 pb-3'>Created a Food Bill Calculator with automatic calculation, itemized breakdown, and tip functionality</p>
                </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Project
