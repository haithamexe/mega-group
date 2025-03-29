import React from "react";
import "../styles/about.css";
import ImageShapesContainer from "../components/ImageShapesContainer";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

function About() {
  const { scrollYProgress } = useScroll();
  const [wordIndex, setWordIndex] = React.useState(0);
  const scrollNormalized = useTransform(scrollYProgress, [0, 1], [0, 11]);

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
      <header className="services-header-wrapper">
        <div className="services-header">
          <div className="header-hero-text">
            <h1>About</h1>
            <p>
              We are passionate about helping businesses grow and scale. We
              specialize in web design, branding, marketing, and digital
              transformation. Our team is dedicated to helping you succeed.
            </p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer image="2021_Janasduari_61-1.jpg" />
          </div>
        </div>
      </header>
      <section className="about-content">
        <div className="about-content-wrapper">
          <div className="about-content-item">
            <h2>Our Mission</h2>
            <p>
              Our mission is to help businesses grow and succeed. We are
              dedicated to providing the best services to our clients and
              helping them achieve their goals.
            </p>
          </div>
          <div className="about-content-item">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be the leading provider of web design, branding,
              marketing, and digital transformation services. We are committed
              to helping businesses thrive in the digital age.
            </p>
          </div>
          <div className="about-content-item">
            <h2>Our Values</h2>
            <p>
              Our values are integrity, excellence, and innovation. We believe
              in doing the right thing, delivering high-quality work, and
              pushing the boundaries of what is possible.
            </p>
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
                fontSize: "8rem",
              }}
            >
              {words[wordIndex]}
            </motion.h1>
          </div>
        </div>
      </section>
      <section className="about-adresses">
        <div className="about-address">
          <h2>Libya</h2>
          <p>1234 Street Name</p>
          <p>trablus, al3asma, 12345</p>
          <p>276 33 10 535 90+</p>
        </div>
        <div className="about-address">
          <h2>Turkey</h2>
          <p>1234 Street Name</p>
          <p>Istanbul, bubuduzu, 12345</p>
          <p>276 33 10 535 90+</p>
        </div>
      </section>
      <section className="about-socials">{/* Add a socials here */}</section>
      <section className="about-map">{/* Add a map here */}</section>
    </motion.div>
  );
}

export default About;
