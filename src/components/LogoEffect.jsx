import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function LogoEffect({ normalizedY, scrollYProgress }) {
  return (
    <div className="header-logo-container">
      <Link to="/">
        {/* <motion.div
          className="header-logo-backdrop"
          style={{
            rotate: scrollYProgress,
            width: normalizedY,
            height: normalizedY,
            x: normalizedY,
          }}
        ></motion.div> */}
        <img src="/images/mega-logo-blue.png" alt="Mega Group Logo" />
      </Link>
    </div>
  );
}

export default LogoEffect;
