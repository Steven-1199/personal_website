import React from "react";
import "./brand.css";
import { linkedin, instagram, facebook } from "./imports.js";

const Brand = () => {
  return (
    <div className="gpt3__brand">
      <div>
        <a
          href="https://www.linkedin.com/in/phanit-phou-970b951b8/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/phanit.phou/" target="_blank">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/phanit.phou.12" target="_blank">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default Brand;
