import React, { Component } from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import computer from "../../assets/computer.png";
import download from "../../assets/download.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
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
            href="https://my.indeed.com/api/3/profile/files/resume/mostRecent"
            target="_blank"
          >
            <p>Download resume</p>
          </a>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={computer} alt="computer" />
      </div>
    </div>
  );
};

export default Header;
