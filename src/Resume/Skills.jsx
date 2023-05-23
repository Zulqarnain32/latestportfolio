import React,{ useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const Skills = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      // easing: 'ease-in-sine',
      easing: 'linear',
      delay: 400,
    })
  }, [])
  return (
    <div id='resume'>
      <div className="container width">
        <div className="row red">
          <div className="col-md-6">
             <div className="lefti">
                <div className="html-container mb-4">
                  <h5 className='mb-3'>Html</h5>
                  <div className='html w-100'>
                    <div className="child1 htmll"  data-aos = "fade-right">
                      <div className="inner">90%</div>
                    </div>
                  </div>
                </div>
             </div>
             <div className="lefti">
                <div className="html-container mb-4">
                  <h5 className='mb-3'>Css</h5>
                  <div className='html w-100'>
                    <div className="child1 css "  data-aos = "fade-right">
                      <div className="inner">80%</div>
                    </div>
                  </div>
                </div>
             </div>
             <div className="lefti">
                <div className="html-container mb-4">
                  <h5 className='mb-3'>Bootstrap</h5>
                  <div className='html w-100'>
                  <div className="child1 boo" data-aos = "fade-right">
                      <div className="inner">80%</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          <div className="col-md-6">
            <div className="righti">
             
                <div className="html-container mb-4">
                  <h5 className='mb-3'>React</h5>
                  <div className='html w-100'>
                    <div className="child1 react" data-aos = "fade-right" >
                      <div className="inner">70%</div>
                    </div>
                  </div>
                </div>
             
             <div className="righti">
                <div className="html-container mb-4">
                  <h5 className='mb-3'>Node</h5>
                  <div className='html w-100'>
                    <div className="child1 node" data-aos = "fade-right">
                      <div className="inner">60%</div>
                    </div>
                  </div>
                </div>
             </div>
             <div className="righti">
                <div className="html-container mb-4">
                  <h5 className='mb-3'>Javascript</h5>
                  <div className='html w-100'>
                    <div className="child1 javascript" data-aos = "fade-right">
                      <div className="inner">70%</div>
                    </div>
                  </div>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
