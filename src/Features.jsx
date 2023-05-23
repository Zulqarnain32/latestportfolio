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
                    <h4 className='box-heading'>Frontend Development</h4>
                     <p>Creative and versatile Frontend Web Developer proficient in building visually stunning and user-friendly websites.
</p>
                </div>   
            </span>
            </div>
           </div>
           <div className="col-md-4">
            <div className="web-box">
                <FaLaptop className='features-icon'/>
                <div className="box-title">
                    <h4 className='box-heading'> Web Development</h4>
                     <p>Innovative problem-solver in web development, I thrive on tackling complex challenges and transforming ideas into robust digital solutions.</p>
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
