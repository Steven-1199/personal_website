import React from "react";
import { Feature } from "../../Components";
import "./skill.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs.png";
import mysql from "../../assets/mysql.png";
import c from "../../assets/c.png";

const Skill = () => {
  return (
    <div className="skill section__margin" id="skilll">
      <div className="skill-feature">
        <Feature title="SKILLS" text="" />
      </div>

      <div className="skill-container">
        <div className="gpt3__feature-container__feature">
          <div className="gpt3__feature-container__feature-text">
            <img src={html} />
          </div>
          <div className="gpt3__feature-container__feature-title">
            <div></div>
            <h1>HTML</h1>
          </div>
        </div>
        <div className="gpt3__feature-container__feature">
          <div className="gpt3__feature-container__feature-text">
            <img src={css} />
          </div>
          <div className="gpt3__feature-container__feature-title">
            <div></div>
            <h1>css</h1>
          </div>
        </div>
        <div className="gpt3__feature-container__feature">
          <div className="gpt3__feature-container__feature-text">
            <img src={javascript} />
          </div>
          <div className="gpt3__feature-container__feature-title">
            <div></div>
            <h1>Javascript</h1>
          </div>
        </div>
        <div className="gpt3__feature-container__feature">
          <div className="gpt3__feature-container__feature-text">
            <img src={react} />
          </div>
          <div className="gpt3__feature-container__feature-title">
            <div></div>
            <h1>React</h1>
          </div>
        </div>
        <div className="gpt3__feature-container__feature">
          <div className="gpt3__feature-container__feature-text">
            <img src={nodejs} />
          </div>
          <div className="gpt3__feature-container__feature-title">
            <div></div>
            <h1>Node.js</h1>
          </div>
        </div>
        <div className="gpt3__feature-container__feature">
          <div className="gpt3__feature-container__feature-text">
            <img src={mysql} />
          </div>
          <div className="gpt3__feature-container__feature-title">
            <div></div>
            <h1>MySQL</h1>
          </div>
        </div>
        <div className="gpt3__feature-container__feature">
          <div className="gpt3__feature-container__feature-text">
            <img src={c} />
          </div>
          <div className="gpt3__feature-container__feature-title">
            <div></div>
            <h1>C</h1>
          </div>
        </div>
      </div>
      <div className="skill-feature">
        <div className="ed">
          <div className="gpt3__feature-container__feature-title">
            <div></div>
            <h1>EDUCATION</h1>
          </div>
          <div className="education-text">
            <p>School: University of Louisville</p>
            <p>Major: Computer Scince and Engineering</p>
            <p>Year start: 2020</p>
            <p>Year end(expented): 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
