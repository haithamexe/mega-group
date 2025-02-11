import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function LogoEffect({ normalizedY, scrollYProgress, topValue }) {
  return (
    <div className="header-logo-container">
      <Link to="/">
        <div className="header-logo-backdrop-container">
          <motion.div
            className="header-logo-backdrop"
            style={{
              top: topValue,
            }}
          ></motion.div>
          {/* <div className="header-logo-backdrop-white" style={{}}></div>
          <div className="header-logo-backdrop-white-2" style={{}}></div> */}
        </div>
        <div className="header-logo-img-container">
          {/* <img src="/images/mega-logo-blue.png" alt="Mega Group Logo" /> */}
          <img
            src="/images/mega-logo-header-loading.png"
            alt="Mega Group Logo"
          />
        </div>
      </Link>
    </div>
  );
}

export default LogoEffect;
