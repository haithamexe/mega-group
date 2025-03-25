import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import LogoEffect from "./LogoEffect";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import { useHeaderContext } from "../context/HeaderProvider";

const links = [
  {
    url: "/",
    text: "HOME",
  },
  {
    url: "/services",
    text: "SERVICES",
  },
  {
    url: "/prices",
    text: "PRICES",
  },
  {
    url: "/ourwork",
    text: "OUR WORK",
  },
  {
    url: "/about",
    text: "ABOUT",
  },
  {
    url: "/contact",
    text: "CONTACT",
  },
];

function Header({ scrollYProgress, normalizedY }) {
  // const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  // const { currentPage, setCurrentPage } = useHeaderContext();
  const [currentPage, setCurrentPage] = useState("undefined");

  const width = useSpring(
    useTransform(scrollYProgress, [0, 0.01], [1300, 3000]),
    {
      stiffness: 400,
      damping: 40,
    }
  );
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  const margin = useTransform(scrollYProgress, [0, 0.005], [20, 0]);
  const borderAll = useTransform(scrollYProgress, [0, 0.3], ["0px", "0px"]);
  const borderBottomWidth = useTransform(
    scrollYProgress,
    [0.04, 0.2],
    ["0px", "1px"]
  );

  const itemPadding = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, 7]),
    {
      stiffness: 500,
      damping: 30,
    }
  );

  const topValue = useTransform(normalizedY, [0, 200], ["-10px", "10px"]);

  const handleContactClick = () => {
    console.log("Contact Us");
  };

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const background = useTransform(
    scrollYProgress,
    [0, 0.03],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );

  const color = useTransform(
    scrollYProgress,
    [0, 0.02],
    ["rgba(255, 255, 255)", "rgba(0, 0, 0)"]
  );

  const paddingleft = useTransform(scrollYProgress, [0, 0.01], ["0px", "60px"]);
  const paddingright = useTransform(
    scrollYProgress,
    [0, 0.01],
    ["0px", "60px"]
  );

  useEffect(() => {
    if (window.location.pathname.split("/")[1] === "") {
      setCurrentPage("home");
    } else {
      console.log(window.location.pathname.split("/")[1]);
      setCurrentPage(window.location.pathname.split("/")[1]);
    }
  }, []);

  return (
    <motion.div
      style={{
        // width: width,
        // ...(isHome ? { margin: margin } : { margin: 0 }),
        // paddingLeft: paddingleft,
        // paddingRight: paddingright,
        borderWidth: borderAll,
        borderBottomWidth: borderBottomWidth,

        // backgroundColor: background,

        ...(currentPage !== "home" && currentPage !== "undefined"
          ? {
              // borderBottom: "1px solid black",

              backgroundColor: "rgb(255, 255, 255)",
              // margin: 0,
              borderWidth: 0,
              borderBottomWidth: 1,
            }
          : {
              backgroundColor: background,
              // margin: margin,
              borderBottomWidth: borderBottomWidth,
              borderWidth: borderAll,
            }),

        // borderRadius: borderRadius,
      }}
      className="header"
    >
      <LogoEffect
        normalizedY={normalizedY}
        scrollYProgress={scrollYProgress}
        topValue={topValue}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <nav>
        <ul className="header-links">
          {links.map((link) => (
            <li key={link.url}>
              <Link
                to={link.url}
                onClick={() => {
                  setCurrentPage(link.text.toLowerCase());
                }}
              >
                <motion.div style={{}}>
                  <motion.h1
                    style={{
                      ...(currentPage !== "home" && currentPage !== "undefined"
                        ? { color: "black" }
                        : { color: color }),
                    }}
                  >
                    {link.text !== "CONTACT" ? (
                      <h1
                        style={{
                          color:
                            currentPage === link.text.toLowerCase()
                              ? "#1B8ECD"
                              : null,
                        }}
                      >
                        {link.text}
                      </h1>
                    ) : (
                      <div
                        className="header-contact-button"
                        onClick={handleContactClick}
                      >
                        {link.text}
                      </div>
                    )}
                  </motion.h1>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <button className="header-contact-button" onClick={handleContactClick}> */}
      {/* <svg></svg> */}
      {/* <h4>Contact Us</h4> */}
      {/* <i className="fa-brands fa-whatsapp"></i> */}
      {/* </button> */}
    </motion.div>
  );
}

export default Header;
