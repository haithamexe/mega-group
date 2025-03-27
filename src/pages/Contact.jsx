import React from "react";
import ImageShapesContainer from "../components/ImageShapesContainer";
import ContactContainer from "../components/ContactContainer";
import { motion, useScroll } from "motion/react";
import "../styles/contactPage.css";

function Contact() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="contact-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <header className="services-header-wrapper">
        <div className="services-header">
          <div className="header-hero-text">
            <h1>Contact</h1>
            <p>
              We would love to hear from you! Please fill out the form below or
              contact us through social media and we will get back to you as
              soon as possible.
            </p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer image="contact-bg.jpg" />
          </div>
        </div>
      </header>
      <section className="contact-content">
        <div className="contact-content-wrapper">
          <div className="contact-content-options">
            <div className="contact-content-option">
              <h3>Contact Us on </h3>
              <div className="contact-logo-wrapper">
                <img src="/images/whatsapp-text-logo.png" alt="Whatsapp logo" />
              </div>
              <button
                className="contact-whatsapp-button"
                style={{ backgroundColor: "#25d366" }}
              >
                Whatsapp Chat
              </button>
            </div>
            <div className="contact-content-option">
              <h3>Contact Us on </h3>
              <div className="contact-logo-wrapper">
                <img src="/images/facebook-text-logo.png" alt="facebook logo" />
              </div>
              <button
                className="contact-messenger-button"
                style={{ backgroundColor: "#3b5998" }}
              >
                Facebook Chat
              </button>
            </div>
            <div className="contact-content-option">
              <h3>Phone Number</h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                +1 234 567 890
              </p>
            </div>
          </div>
          <ContactContainer scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
