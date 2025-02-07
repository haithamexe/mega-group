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
    text: "Home",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/prices",
    text: "Prices",
  },
  {
    url: "/ourworks",
    text: "Our Works",
  },
  {
    url: "/contact",
    text: "Contact",
  },

  {
    url: "/about",
    text: "About",
  },
];

function Header({ scrollYProgress, normalizedY }) {
  // const { scrollYProgress } = useScroll();

  const width = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1200, 3000]),
    {
      stiffness: 200,
      damping: 20,
    }
  );
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  const margin = useTransform(scrollYProgress, [0, 0.1], [10, 0]);
  const borderAll = useTransform(scrollYProgress, [0, 0.3], ["2px", "0px"]);
  const borderBottomWidth = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["2px", "1px"]
  );

  const handleContactClick = () => {
    console.log("Contact Us");
  };

  return (
    <motion.div
      style={{
        width: width,
        borderRadius: borderRadius,
        margin: margin,
        borderWidth: borderAll,
        borderBottomWidth: borderBottomWidth,
      }}
      className="header"
    >
      <LogoEffect normalizedY={normalizedY} scrollYProgress={scrollYProgress} />
      <nav>
        <ul className="header-links">
          {links.map((link) => (
            <li key={link.url}>
              <Link to={link.url}>
                <div>{link.text}</div>
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
