import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import LogoEffect from "./LogoEffect";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { useHeaderContext } from "../context/HeaderProvider";
import { useLanguageContext } from "../context/LanguageProvider";
import { Menu, CircleX } from "lucide-react";

function Header({ scrollYProgress, normalizedY }) {
  const { language, setLanguage } = useLanguageContext();

  const links = [
    {
      url: "/",
      text: language?.Header?.home,
      link: "home",
    },
    {
      url: "/services",
      text: language?.Header?.services,
      link: "services",
    },
    {
      url: "/prices",
      text: language?.Header?.prices,
      link: "prices",
    },
    {
      url: "/ourwork",
      text: language?.Header?.our_work,
      link: "ourwork",
    },
    {
      url: "/about",
      text: language?.Header?.about,
      link: "about",
    },
    {
      url: "/contact",
      text: language?.Header?.contact,
      link: "contact",
    },
  ];

  // const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentPage, setCurrentPage, isMobile } = useHeaderContext();
  // const [currentPage, setCurrentPage] = useState("");
  const [textColorScroled, setTextColorScrolled] = useState(true);

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
    ["rgba(255, 123, 255)", "rgba(0, 0, 0)"]
  );

  const paddingleft = useTransform(scrollYProgress, [0, 0.01], ["0px", "60px"]);
  const paddingright = useTransform(
    scrollYProgress,
    [0, 0.01],
    ["0px", "60px"]
  );

  const [menuIsOpen, setMenuIsOpen] = useState(true);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [menuButtonColor, setMenuButtonColor] = useState("white");

  const menuRef = useRef();
  const dropdownRef = useRef();

  // useEffect(() => {
  //   if (window.location.pathname.split("/")[1] === "") {
  //     setCurrentPage("home");
  //   } else {
  //     console.log(window.location.pathname.split("/")[1]);
  //     setCurrentPage(window.location.pathname.split("/")[1]);
  //   }
  // }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.02) {
      setTextColorScrolled(false);
    } else {
      setTextColorScrolled(true);
    }
  });

  const handleMouseClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuIsOpen(false);
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseClick);

    return () => {
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, []);

  useEffect(() => {
    setDropDownOpen(false);
    setMenuIsOpen(false);
  }, [currentPage]);

  return (
    <motion.div
      style={{
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
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {!isMobile ? (
        <>
          <nav>
            <ul className="header-links">
              {links.map((link) => (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    onClick={() => {
                      setCurrentPage(link.link);
                    }}
                    className={
                      currentPage === "home" && textColorScroled
                        ? "header-link-text-home"
                        : "header-link-text"
                    }
                  >
                    {link.text !== "CONTACT" &&
                    link.text !== "اتصل بنا" &&
                    link.text !== "İletişim" ? (
                      <h1
                        className={
                          currentPage === link.link ? "header-link-active" : ""
                        }
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
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="language-change-mobile"></div>
        </>
      ) : !menuIsOpen ? (
        <Menu
          onClick={() => setMenuIsOpen(true)}
          size={30}
          style={{
            color:
              !textColorScroled || currentPage != "home" ? "black" : "white",
            height: "100%",
            textAlign: "center",
          }}
        />
      ) : (
        <>
          <CircleX
            onClick={() => setMenuIsOpen(false)}
            size={30}
            style={{
              color: "white",
              textAlign: "center",
              position: "absolute",
              zIndex: "9999",
              cursor: "pointer",
              height: "100%",
            }}
          />
          <div className="header-links-mobile-container">
            <nav>
              <AnimatePresence>
                <motion.ul
                  initial={{
                    right: -100,
                    top: -100,
                  }}
                  animate={{
                    right: 0,
                    top: 0,
                  }}
                  exit={{
                    right: -100,
                    top: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    type: "spring",
                    bounce: 0.6,
                    stiffness: 70,
                    mass: 0.3,
                  }}
                  className="header-links-mobile"
                  ref={menuRef}
                >
                  {links.map((link) => (
                    <li key={link.url}>
                      <Link
                        to={link.url}
                        onClick={() => {
                          setCurrentPage(link.link);
                        }}
                        className={"header-link-text"}
                      >
                        {link.text !== "CONTACT" &&
                        link.text !== "اتصل بنا" &&
                        link.text !== "İletişim" ? (
                          <h1
                            className={
                              currentPage === link.link
                                ? "header-link-active"
                                : ""
                            }
                          >
                            {link.text}
                          </h1>
                        ) : (
                          <h1
                            // className="header-contact-button"
                            onClick={handleContactClick}
                            className={
                              currentPage === "contact"
                                ? "header-link-active"
                                : ""
                            }
                            style={{
                              border: "none",
                            }}

                            // className="header-link-text"
                          >
                            {link.text}
                          </h1>
                        )}
                      </Link>
                    </li>
                  ))}
                  <div className="mobile-header-buttons">
                    <h2
                      style={{
                        cursor: "pointer",
                      }}
                      className="whatsapp-button"
                    >
                      WhatsApp
                    </h2>
                    <h1
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => setDropDownOpen((prev) => !prev)}
                    >
                      {language.language === "en"
                        ? "Language"
                        : language.language === "tr"
                        ? "Dil"
                        : "اللغة"}
                    </h1>
                    {dropDownOpen && (
                      <div className="mobile-dropdown-footer" ref={dropdownRef}>
                        <div
                          className="mobile-dropdown-item"
                          onClick={() => {
                            setLanguage("ar");
                            setDropDownOpen(false);
                          }}
                        >
                          <h1
                            style={{
                              cursor: "pointer",
                              padding: 0,
                              border: "none",
                            }}
                          >
                            عربي
                          </h1>
                        </div>
                        <div
                          className="mobile-dropdown-item"
                          onClick={() => {
                            setLanguage("en");
                            setDropDownOpen(false);
                          }}
                        >
                          <h1
                            style={{
                              cursor: "pointer",
                              padding: 0,
                              border: "none",
                            }}
                          >
                            {" "}
                            English{" "}
                          </h1>
                        </div>
                        <div
                          className="mobile-dropdown-item"
                          onClick={() => {
                            setLanguage("tr");
                            setDropDownOpen(false);
                          }}
                        >
                          <h1
                            style={{
                              cursor: "pointer",
                              padding: 0,
                              border: "none",
                            }}
                          >
                            Türkçe
                          </h1>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.ul>
              </AnimatePresence>
            </nav>
            {/* <div className="mobile-language"></div> */}
          </div>
        </>
      )}
      {/* <button className="header-contact-button" onClick={handleContactClick}> */}
      {/* <svg></svg> */}
      {/* <h4>Contact Us</h4> */}
      {/* <i className="fa-brands fa-whatsapp"></i> */}
      {/* </button> */}
    </motion.div>
  );
}

export default Header;
