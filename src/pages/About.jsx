import React from "react";
import "../styles/about.css";
import ImageShapesContainer from "../components/ImageShapesContainer";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useLanguageContext } from "../context/LanguageProvider";

function About() {
  const { scrollYProgress } = useScroll();
  const [wordIndex, setWordIndex] = React.useState(0);
  const scrollNormalized = useTransform(scrollYProgress, [0, 1], [0, 11]);
  const { language } = useLanguageContext();

  const words = [
    "",
    "",
    "Innovate",
    "Empower",
    "Transform",
    "Excel",
    "Connect",
    "Sustain",
    "Inspire",
    "",
    "",
  ];

  useMotionValueEvent(scrollNormalized, "change", (latest) => {
    setWordIndex(Math.floor(latest));
  });

  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
    >
      <header
        className={
          language.language === "ar"
            ? "services-header-wrapper direction-right"
            : "services-header-wrapper"
        }
      >
        <div className="services-header">
          <div className="header-hero-text">
            <h1>{language?.About?.title}</h1>
            <p>{language?.About?.subtitle}</p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer image="2021_Janasduari_61-1.jpg" />
          </div>
        </div>
      </header>
      <section
        className={
          language.language === "ar"
            ? "about-content direction-right"
            : "about-content"
        }
      >
        <div className="about-content-wrapper">
          <div className="about-content-item">
            <h2>{language?.About?.mission.title}</h2>
            <p>{language?.About?.mission.subtitle}</p>
          </div>
          <div className="about-content-item">
            <h2>{language?.About?.vision.title}</h2>
            <p>{language?.About?.vision.subtitle}</p>
          </div>
          <div className="about-content-item">
            <h2>{language?.About?.values.title}</h2>
            <p>{language?.About?.values.subtitle}</p>
          </div>
        </div>
        {/* <div className="about-image-container">
          <img
            src="/images/1737149568768.jfif"
            alt="about"
            className="about-content-img"
          />
        </div> */}
        <div
          className="about-image-container"
          style={{
            width: "100%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              objectFit: "contain",
              width: "70%",
              height: "70%",
            }}
            src="/images/mega-logo-blue.png"
            alt="about"
            className="about-content-img"
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.img
              style={{
                objectFit: "cover",
                backgroundColor: "white",
              }}
              src="/images/mega-logo-stairs.png"
              alt="about"
              className="about-content-img"
            />
            <motion.h1
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#1b8ecd",
                zIndex: 10,
              }}
              className="about-words-scroll"
            >
              {words[wordIndex]}
            </motion.h1>
          </div>
        </div>
      </section>
      <section
        className={
          language.language === "ar"
            ? "about-adresses direction-right"
            : "about-adresses"
        }
      >
        <div className="about-address">
          <h2>{language?.About?.locations?.libya.title}</h2>
          <p>{language?.About?.locations?.libya.subtitle}</p>
        </div>
        <div className="about-address">
          <h2>{language?.About?.locations?.turkey.title}</h2>
          <p>{language?.About?.locations?.turkey.subtitle}</p>
        </div>
      </section>
      <section className="about-socials">{/* Add a socials here */}</section>
      <section className="about-map">{/* Add a map here */}</section>
    </motion.div>
  );
}

export default About;
