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
            href="https://s3.amazonaws.com/symp.csm.usprod/speed-louisville/files/43a/43a69e860918912f97ce479f6bd29579.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAID3RBESXBCESHUGA%2F20220305%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220305T011306Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=8047ae3bcd5673e2de055e046f221573159eeb562aa74bad1d734e23e63dbe3a"
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
