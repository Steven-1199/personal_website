import React from "react";
import { Feature } from "../../Components";
import "./skill.scss";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import mysql from "../../assets/mysql.png";
import c from "../../assets/c.png";
import git from "../../assets/git.png";
import redux from "../../assets/redux.png";
import mongodb from "../../assets/mongodb.png";

import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

const Skill = () => {
  return (
    <div className="skill">
      <div className="skill-feature">
        <Feature title="SKILLS" text="" />
      </div>

      <div className="skill-container">
        {[
          [html, "HTML", "rgba(249, 154, 93, 0.3)"],
          [css, "CSS", "rgba(211,211,211,0.8)"],
          [javascript, "Javascript", "rgba(255,255,0,0.1)"],
          [react, "React", "rgba(211,211,211,0.8)"],
          [node, "Node.js", "rgba(0,128,0, 0.2)"],
          [mysql, "MySQL", "rgba(211,211,211,0.8)"],
          [mongodb, "MongoDB", "rgba(0,128,0, 0.2)"],
          [c, "C", "rgba(211,211,211,0.8)"],
          [git, "Git", "rgba(249, 154, 93, 0.3)"],
          [redux, "Redux", "rgba(211,211,211,0.8)"],
        ].map((value, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
            className="gpt3__feature-container__skill"
            key={index}
          >
            <div className="" style={{ backgroundColor: value[2] }}>
              <img src={value[0]} />
            </div>
            <p>{value[1]}</p>
          </motion.div>
        ))}
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

export default AppWrap(Skill, "skilll");
