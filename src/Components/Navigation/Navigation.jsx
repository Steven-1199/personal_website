import React from "react";
import "./Navigation.scss";
import { motion } from "framer-motion";

const Navigation = ({ active }) => (
  <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 1.5 }}
    className="app__navigation"
  >
    {["home", "skilll", "project", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#66fcf1" } : {}}
      />
    ))}
  </motion.div>
);
export default Navigation;
