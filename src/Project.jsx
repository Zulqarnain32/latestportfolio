import React from "react";
import { FaEmpire, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div id="projects">
      <div className="project-heading">
        <h1 className="text-center text-white">My Projects</h1>
      </div>
      <div className="container width">
        <div className="row mx-auto features">
          <div className="col-md-4">
            <div className="first-box">
              <div className="text-center pt-3">
                <img src="/assets/ecomm.jpg" className="wi" alt="imgi s" />
              </div>
              <div className="first-title d-flex align-items-center justify-content-between mx-0 mt-3">
                <div className="setfont">Ecommerece Website</div>
                <div className="project-icons">
                  <span className="github">
                    <Link to="https://github.com/Zulqarnain32/zulqarnain360ecommerce">
                      <FaGithub />
                    </Link>
                  </span>
                  <span className="demo ">
                    <Link to="https://zulqarnain-360-ecommerce-webiste.netlify.app/">
                      <FaEmpire />
                    </Link>
                  </span>
                  {/* <span className="demo "><FaEmpire/></span> */}
                </div>
              </div>
              <p className="my-2 mx-0 pb-3">
                {" "}
                Created an ecommerce website with a variety of tech products,
                featuring easy "Add to Cart" functionality for seamless online
                shopping.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="second-box">
              <div className="text-center pt-3">
                <img src="/assets/hotel.jpg" className="wi" alt="imgi s" />
              </div>
              <div className="first-title d-flex align-items-center justify-content-between mx-0 mt-3">
                <div className="setfont">Hotel Booking Website</div>
                <div className="project-icons">
                  <span className="github">
                    <Link to="https://github.com/Zulqarnain32/DIGIBHEM">
                      <FaGithub />
                    </Link>
                  </span>
                  <span className="demo">
                    <Link to="https://zulqarnainhotelbookwebsite.netlify.app">
                      <FaEmpire />
                    </Link>
                  </span>
                </div>
              </div>
              <p className="my-2 mx-0 pb-3">
                Created a user-friendly hotel booking website with customizable
                search options and effortless booking for a seamless travel
                experience.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="third-box">
              <div className="text-center pt-3">
                <img src="/assets/pizza1.jpg" className="wi" alt="imgi s" />
              </div>
              <div className="first-title d-flex align-items-center justify-content-between mx-0 mt-3">
                <div className="setfont">Order Your Food</div>
                <div className="project-icons">
                <span className="github">
                    <Link to="https://github.com/Zulqarnain32/full-stack-food-order">
                      <FaGithub />
                    </Link>
                  </span>
                  <span className="demo ">
                    <FaEmpire />
                  </span>
                </div>
              </div>
              <p className="my-2 mx-0 pb-3">
                Built a food order website with a customizable menu and easy
                "Add to Cart" functionality for effortless online ordering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
