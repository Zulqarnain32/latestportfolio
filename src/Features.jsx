import React from 'react'
import { FaCode, FaCodepen, FaLaptop } from "react-icons/fa"
const Features = () => {
  return (
    <div id='feaures'>
      <div className="first-title  mt-4 " id='Features'>
        Features
      </div>
      <div className="main-title">
        <h1>What I Do</h1>
      </div>

      <div className="container width">
        <div className="row mx-auto features" >
           <div className="col-md-4">
            <div className="frontend-box">
               <span className="">
                <FaCode className='features-icon'/> 
                <div className="box-title">
                    <h4 className='box-heading'>MERN Development</h4>
                   <p>I am a passionate MERN Stack developer skilled in building dynamic, full-stack web applications using modern technologies</p>
                </div>   
            </span>
            </div>
           </div>
           <div className="col-md-4">
            <div className="web-box">
                <FaLaptop className='features-icon'/>
                <div className="box-title">
                
                    <h4 className='box-heading'>Responsive Design</h4>
                <p>I specialize in responsive design, creating seamless, user-friendly websites that adapt perfectly to all screen sizes</p>
                </div>

            </div>
           </div>
           <div className="col-md-4"> 
            <div className="react-box">
                <FaCodepen className='features-icon'/>
                <div className="box-title">
                    <h4 className='box-heading'>React Website</h4>
                     <p>Passionate React.js developer with a strong focus on building responsive and scalable web applications. </p>
                </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Features
