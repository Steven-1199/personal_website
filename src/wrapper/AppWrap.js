import React from "react";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import Navigation from "../Components/Navigation/Navigation";

const AppWrap = (Components, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <SocialMedia />

        <Components />
        <Navigation active={idName} />
      </div>
    );
  };

export default AppWrap;
