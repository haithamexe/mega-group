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
    useTransform(scrollYProgress, [0, 0.02], [1300, 3000]),
    {
      stiffness: 200,
      damping: 20,
    }
  );
  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  const margin = useTransform(scrollYProgress, [0, 0.06], [20, 0]);
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
                  {link.text}
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
