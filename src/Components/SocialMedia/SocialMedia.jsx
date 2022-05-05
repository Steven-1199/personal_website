import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./SocialMedia.scss";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <motion.div
      whileInView={{ y: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__social"
    >
      <a
        href="https://www.linkedin.com/in/phanit-phou-970b951b8/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.facebook.com/phanit.phou.12" target="_blank">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/phanit.phou/" target="_blank">
        <BsInstagram />
      </a>
    </motion.div>
  );
};

export default SocialMedia;
