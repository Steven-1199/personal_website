import React, { Component } from "react";
import "./header.scss";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import computer from "../../assets/computer.png";
import download from "../../assets/download.png";
import circle from "../../assets/circle.svg";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="gpt3__header">
      <div className="gpt3__header-content">
        <h1 className="">
          <span className="titleS">Hello!</span> <br />
          I'm Phanit Phou
        </h1>
        <p>
          I am a junior web developer based in Louisville, ky who loves to learn
          new things
        </p>

        <div className="gpt3__header-content__people">
          <img src={download} />

          <a
            href="https://drive.google.com/file/d/1vEso8E49sFHGDa5s7Py76q2mbKoIWC8-/view?usp=sharing"
            target="_blank"
          >
            <p>Download resume</p>
          </a>
        </div>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="gpt3__header-image"
      >
        <img src={computer} alt="computer" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
