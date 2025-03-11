import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useTransform, useMotionValueEvent } from "motion/react";
import "../index.css";
import { useHeaderContext } from "../context/HeaderProvider";

function LogoEffect({
  normalizedY,
  scrollYProgress,
  topValue,
  currentPage,
  setCurrentPage,
  isHome,
}) {
  const color = useTransform(
    scrollYProgress,
    [0, 0.02],
    ["#ffffff", "#000000"]
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scroll value --:", latest);
    if (latest <= 0.01) {
      setIsScrolled(false);
      console.log("scrolled+", latest);
    } else {
      setIsScrolled(true);
      console.log("scrolled-", latest);
    }
  });

  // const marginRight = useTransform(scrollYProgress, [0, 0.1], ["320px", "0px"]);

  return (
    <motion.div className="header-logo-container">
      <Link
        to="/"
        onClick={() => {
          setCurrentPage("home");
        }}
      >
        <div className="header-logo-backdrop-container">
          {/* <motion.div
            className="header-logo-backdrop"
            style={{
              bottom: topValue,
            }}
          ></motion.div> */}
          {/* <div className="header-logo-backdrop-white" style={{}}></div>
          <div className="header-logo-backdrop-white-2" style={{}}></div> */}
        </div>
        <div className="header-logo-img-container">
          {currentPage === "" || currentPage === "home" ? (
            isScrolled ? (
              <img src="/images/mega-logo-blue.png" alt="Mega Group Logo" />
            ) : (
              <img
                src="/images/mega-logo-blue-white.png"
                alt="Mega Group Logo"
              />
            )
          ) : (
            <img src="/images/mega-logo-blue.png" alt="Mega Group Logo" />
          )}

          {/* <motion.p
            style={{
              color: color,
            }}
          >
            MEGA GROUP
          </motion.p> */}
          {/* <img
            src="/images/mega-logo-header-loading.png"
            alt="Mega Group Logo"
          /> */}
        </div>
      </Link>
    </motion.div>
  );
}

export default LogoEffect;
