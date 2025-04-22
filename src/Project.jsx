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
                    <Link target="_" to="https://zulqarnain-360-ecommerce-webiste.netlify.app/">
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
                <img src="/assets/futbal.jpg" className="wi" alt="imgi s" />
              </div>
              <div className="first-title d-flex align-items-center justify-content-between mx-0 mt-3">
                <div className="setfont">Football Team Website</div>
                <div className="project-icons">
                  <span className="github">
                    <Link target="_" to="https://github.com/Zulqarnain32/wolf">
                      <FaGithub />
                    </Link>
                  </span>
                  <span className="demo">
                    <Link target="_" to="https://wolf-football-club.vercel.app/">
                      <FaEmpire />
                    </Link>
                  </span>
                </div>
              </div>
              <p className="my-2 mx-0 pb-3">
              AI-powered football website for team insights—ask anything about players, stats, matches, goals, wins, or losses.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="third-box">
              <div className="text-center pt-3">
                <img src="/assets/jobimage.jpg" className="wi" alt="imgi s" />
              </div>
              <div className="first-title d-flex align-items-center justify-content-between mx-0 mt-3">
                <div className="setfont">MERN JOB PORTAL</div>
                <div className="project-icons">
                <span className="github">
                    <Link target="_" to="https://github.com/Zulqarnain32/MERN-JOB-PORTAL">
                      <FaGithub />
                    </Link>
                  </span>
                  <span className="demo">
                    <Link target="_" to="https://mern-job-portal-frontend-url.vercel.app/">
                      <FaEmpire />
                    </Link>
                  </span>
                </div>
              </div>
              <p className="my-2 mx-0 pb-3">
              MERN job portal website allows users to apply for jobs, recruiters to create job postings, and includes an admin panel for management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
