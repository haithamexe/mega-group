import React from "react";
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
    url: "/contact",
    text: "CONTACT",
  },

  {
    url: "/about",
    text: "ABOUT",
  },
];

function Header({ scrollYProgress, normalizedY }) {
  // const { scrollYProgress } = useScroll();

  const width = useSpring(
    useTransform(scrollYProgress, [0, 0.01], [1300, 3000]),
    {
      stiffness: 200,
      damping: 20,
    }
  );
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  const margin = useTransform(scrollYProgress, [0, 0.03], [20, 0]);
  const borderAll = useTransform(scrollYProgress, [0, 0.3], ["0px", "0px"]);
  const borderBottomWidth = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["0px", "1px"]
  );

  const itemPadding = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, 7]),
    {
      stiffness: 200,
      damping: 10,
    }
  );

  const topValue = useTransform(normalizedY, [0, 200], ["45px", "0px"]);

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

  return (
    <motion.div
      style={{
        width: width,
        // borderRadius: borderRadius,
        margin: margin,
        paddingLeft: paddingleft,
        paddingRight: paddingright,

        borderWidth: borderAll,
        borderBottomWidth: borderBottomWidth,
        backgroundColor: background,
      }}
      className="header"
    >
      <LogoEffect
        normalizedY={normalizedY}
        scrollYProgress={scrollYProgress}
        topValue={topValue}
      />
      <nav>
        <ul className="header-links">
          {links.map((link) => (
            <li key={link.url}>
              <Link to={link.url}>
                <motion.div
                  style={{
                    padding: itemPadding,
                    paddingBottom: "0px",
                    paddingTop: "0px",
                  }}
                >
                  <motion.h1
                    style={{
                      color: color,
                    }}
                  >
                    {link.text}
                  </motion.h1>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="header-contact-button" onClick={handleContactClick}>
        {/* <svg></svg> */}
        Contact Us
      </button>
    </motion.div>
  );
}

export default Header;
