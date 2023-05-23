import React, { useState } from 'react'
import Education from './Resume/Education'
import Skills from './Resume/Skills'
const Buttons = () => {
  const [ edu,setEdu ] = useState(true)
  const [ skill,setSkill ] = useState(false)
  const handleEdu = () => {
    setEdu(true)
    setSkill(false)
  }
  const handleSkill = () => {
    setSkill(true)
    setEdu(false)
  }
  return (
    <>
      <div className="project-heading">
          <h1 className='text-center text-white'>Resume</h1> 
       </div> 
       <div className="container width">
         <div className="row mx-auto buttons ">
            <div className="col-md-4" onClick={handleEdu}>Education</div>
            <div className="col-md-4" onClick={handleSkill}><span className='display'>Professional</span> Skills</div>
            {/* <div className="col-md-4">About Me</div> */}
         </div> 
       </div> 
      { edu && <Education/> }
      { skill && <Skills/> }
    </>
  )
}

export default Buttons
