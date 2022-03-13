import React from "react";
import "./contact.css";
import map from "../../assets/map.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import emailjs from "emailjs-com";

const Footer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_09jovr6",
        "template_3y3pkm6",
        e.target,
        "a27z3y8ep7LeEU137"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="section__padding" id="contact">
      <div className="contact__section">
        <div className="contact__section-outer-outercontainer">
          <div className="contact__section-title">
            <h1>CONTACT ME</h1>
            <p>
              I’m interested in any job opportunities. If you have other request
              or question, don’t hesitate to use the form
            </p>
          </div>
          <div className="contact__section-outercontainer">
            <form className="contact__section-form" onSubmit={sendEmail}>
              <div className="contact__section-form-header">
                <input type="text" placeholder="Name" name="user_name" />
                <input type="email" placeholder="Email" name="user_email" />
              </div>
              <input type="text" placeholder="Subject" name="subject" />
              <input
                className="message_input"
                type="text"
                placeholder="Message"
                name="message"
              />
              <div className="button">
                <button type="submit" value="Send">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact__section-map">
          <div className="contact__section-map-container">
            <img src={map} />
            <div className="contact__section-map-text">
              <p>Phanit Phou</p>
              <p>Louisvill, KY</p>
              <p>phouphanit@yahoo.com</p>
            </div>
          </div>
        </div>
        <div className="contact__section-map-link">
          <div className="contact__section-map-link-border"></div>
          <div className="contact__section-map-link-container">
            <a
              href="https://www.linkedin.com/in/phanit-phou-970b951b8/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
            <a href="https://www.facebook.com/phanit.phou.12" target="_blank">
              <img src={facebook} />
            </a>
            <a href="https://www.instagram.com/phanit.phou/" target="_blank">
              <img src={instagram} />
            </a>
          </div>
          <div className="contact__section-map-link-border"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
