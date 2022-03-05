import React from "react";
import "./features.css";
import jouilinail from "../../assets/jouilinail.png";
import superhero from "../../assets/superhero.png";
import github from "../../assets/github.png";
import live from "../../assets/live.png";

const Features = () => {
  return (
    <div className="feature-project section__padding" id="project">
      <h1>FEATURE PROJECT</h1>
      <div className="feature-project-container">
        <div className="feature-project_jouili">
          <div className="feature-project_jouili_img">
            <a href="https://jouli-nail.vercel.app/" target="_blank">
              <img src={jouilinail} />
            </a>
          </div>
          <div className="feature-project_jouili_outertext">
            <div className="helper">
              <div className="feature-project_jouili_text">
                <p>
                  This is a functional and responsive website (primarily for
                  mobile phone user) that was developed from scratch for small
                  nail salon and has several useful functionality includes
                  user’s sign in/sign up with firebase, allow client schedule
                  appointment 3 days in advance, and send appointment’s
                  information to firebase database.
                </p>
              </div>

              <p className="tect">React Tailwind Firebase DaisyUI</p>
            </div>
            <div className="feature-project_jouili_link_container">
              <div className="feature-project_jouili_link link_less">
                <a
                  href="https://github.com/Steven-1199/Jouli-Nail"
                  target="_blank"
                >
                  <img src={github} />
                  <div>
                    <p>Github Code</p>
                  </div>
                </a>
              </div>
              <div className="feature-project_jouili_link link_extra">
                <a href="https://jouli-nail.vercel.app/" target="_blank">
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
        <div className="feature-project_superhero">
          <div className="feature-project_superhero_img">
            <a href="https://steven-1199.github.io/Heros/" target="_blank">
              <img src={superhero} />
            </a>
          </div>
          <div className="feature-project_superhero_outertext">
            <div className="helper_superhero">
              <div
                className="feature-project_superhero_text
              "
              >
                <p>A website that allow you to search hundrend of superheros</p>
              </div>

              <p className="tect">React API Hook Javascript</p>
            </div>
            <div className="feature-project_jouili_link_container superhero_link_container">
              <div className="feature-project_jouili_link link_less">
                <a href="https://github.com/Steven-1199/Heros" target="_blank">
                  <img src={github} />
                  <div>
                    <p>Github Code</p>
                  </div>
                </a>
              </div>
              <div className="feature-project_jouili_link link_extra">
                <a href="https://steven-1199.github.io/Heros/" target="_blank">
                  <img src={live} />
                  <div>
                    <p>Live Demo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
