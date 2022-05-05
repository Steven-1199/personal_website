import React from "react";
import "./features.scss";
import jouilinail from "../../assets/jouilinail.png";
import peaky_screenshot from "../../assets/peaky_screenshot.png";
import blog_app_screenShot from "../../assets/blog_app_screenShot.png";
import github from "../../assets/github.png";
import live from "../../assets/live.png";
import { AppWrap } from "../../wrapper";

const Features = () => {
  return (
    <div className="feature-project">
      <h1>
        <span className="feature-project-title-extra">FEATURE </span> PROJECT
      </h1>
      <div className="feature-project-container">
        <div className="feature-project_jouili project_jouili">
          <div className="feature-project_jouili_img jouili_img">
            <a
              href="https://movie-palace-lcwch2hjf-steven-1199.vercel.app/"
              target="_blank"
            >
              <img src={blog_app_screenShot} />
            </a>
          </div>
          <div className="feature-project_jouili_outertext jouili">
            <div className="helper">
              <h1>Jouili Nail Salon</h1>
              <div className="feature-project_jouili_text">
                <p>
                  This is a fully responsive blog web application. Its features
                  include recent, features, and editor choice posts. We can post
                  a blog from a content management system.
                </p>
              </div>

              <p className="tect">
                React <span style={{ color: "#66fcf1" }}>Tailwind </span>
                GraphQL GraphCMS
              </p>
            </div>
            <div className="feature-project_jouili_link_container">
              <div className="feature-project_jouili_link link_less">
                <a
                  href="https://github.com/Steven-1199/MoviePalace"
                  target="_blank"
                >
                  <img src={github} />
                  <div>
                    <p>Github Code</p>
                  </div>
                </a>
              </div>
              <div className="feature-project_jouili_link link_extra">
                <a
                  href="https://movie-palace-lcwch2hjf-steven-1199.vercel.app/"
                  target="_blank"
                >
                  <img src={live} />
                  <div>
                    <p>Live Demo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*//////////////////*/}

        <div className="feature-project_jouili project_peaky">
          <div className="feature-project_jouili_outertext peaky_outertext">
            <div className="helper">
              <h1>Social Media</h1>

              <div className="feature-project_jouili_text">
                <p>
                  A social media web app that allows users post their story or
                  question. Users can create, like, comment, edit, or delete
                  posts. There is also feature that allows users to sign up and
                  sign in their account as well.
                </p>
              </div>

              <p className="tect">
                React <span style={{ color: "#66fcf1" }}>Node.JS </span>
                Tailwind <span style={{ color: "#66fcf1" }}>MongoDB</span>
              </p>
            </div>
            <div className="feature-project_jouili_link_container">
              <div className="feature-project_jouili_link link_less">
                <a
                  href="https://github.com/Steven-1199/Peaky_project"
                  target="_blank"
                >
                  <img src={github} />
                  <div>
                    <p>Github Code</p>
                  </div>
                </a>
              </div>
              <div className="feature-project_jouili_link link_extra">
                <a href="https://peaky-project.vercel.app" target="_blank">
                  <img src={live} />
                  <div>
                    <p>Live Demo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="peaky_img feature-project_jouili_img">
            <a href="https://peaky-project.vercel.app" target="_blank">
              <img src={peaky_screenshot} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Features, "project");
