import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormspreeProvider, useForm } from '@formspree/react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { BsGithub } from 'react-icons/bs';


const Contact = () => {
  const [state, handleSubmit] = useForm('xoqzwklo');
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long.')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  

  // const handleSubmit = (values, { resetForm }) => {
  // //   // console.log('Name:', values.name);
  // //   // console.log('Email:', values.email);
  // //   // console.log('Message:', values.message);

  // //   // Perform further processing or submit the form

  //   resetForm();
  //  };


   const onSubmit = (values, { resetForm }) => {
    handleSubmit(values);
    resetForm();
  };

  return (
    <div id='contact'>
    
    <h1 className='text-center text-white'>Contact Me</h1>
      <div className="container width contactform ">
        <div className="row ">
          <div className="col-md-4">
            <div className="about-box  py-2">
               <img src="/assets/handshake.jpg" alt="" />
               <p className='name'>Zulqarnain Chohan</p>
               <p className='small p-0 '>Frontend React Developer</p>
               <p className='small aboout-text'>Skilled in HTML, CSS, Bootstrap,Javascript and React, I have a proven track record of creating seamless and engaging user interfaces.</p>
               <pre className="small phone">Phone  +92 3030128036</pre>
               <p className="small email">zulqarnainc67@gmail.com</p>
               <div className="find">
                <p className='mt-3 mb-0'>Find me in</p>
               <div className="social-media-icons mt-4">
                            <div className='redi'>
                            <NavLink to = "https://www.facebook.com/zulqarnain.chohan.16">
                            <FaFacebook className='social-icons'/></NavLink>
                            </div>
                            <div className='redi'>
                            <NavLink target='_' to = "https://www.linkedin.com/in/zulqarnain-chohan/">
                            <FaLinkedin className='social-icons'/></NavLink>
                            </div>
                           
                            <div className='redi'>
                            <NavLink to = "https://www.instagram.com/zulqarnainchohan5/">
                            <FaInstagram className='social-icons'/></NavLink>
                            </div>  
                            <div className='redi'>
                            <NavLink target='_' to = "https://github.com/Zulqarnain32">
                            <BsGithub  className='social-icons'/></NavLink>
                            </div>
                          </div>
                       
               </div>
            </div>
          </div>
          <div className="col-md-8">
          <FormspreeProvider project="https://formspree.io/f/xoqzwklo">
            <div className="form-box">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
              {/* <form action="https://formspree.io/f/xoqzwklo" method="POST"> */}
            <Form className='bgd' >
              <div>
                <label htmlFor="name" className='form-name'>Name:</label> 
                <Field type="text" id="name" name="name" autoComplete= "off" className = "form-input"/>
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="email" className='form-name'>Email:</label>
                <Field type="email" id="email" name="email" autoComplete= "off" className = "form-input"/>
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="message" className='form-name'>Message:</label>
                <Field as="textarea" row = "6"  id="message" name="message" autoComplete= "off" className = "form-input"/>
                <ErrorMessage name="message" component="div" className="error" />
              </div>

             <div className="btn-container">
                <button type="submit" id='submit-btn' disabled={state.submitting}>
                   {state.submitting ? 'Submitting...' : 'Submit'}  
                </button>   
             </div>
            </Form>
            {/* </form> */}
          </Formik>
            </div>
            </FormspreeProvider>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default Contact;
