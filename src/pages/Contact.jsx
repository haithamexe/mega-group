import React from "react";
import ImageShapesContainer from "../components/ImageShapesContainer";
import ContactContainer from "../components/ContactContainer";
import { motion, useScroll } from "motion/react";
import "../styles/contactPage.css";
import { useLanguageContext } from "../context/LanguageProvider";

function Contact() {
  const { scrollYProgress } = useScroll();
  const { language } = useLanguageContext();

  return (
    <motion.div
      className="contact-us"
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
          <div
            className="header-hero-text"
            style={language.language === "ar" ? { marginLeft: "auto" } : {}}
          >
            <h1>{language?.Contact?.title}</h1>
            <p>{language?.Contact?.subtitle}</p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer image="contact-us-bg.jpg" />
          </div>
        </div>
      </header>
      <section
        className={
          language.language === "ar"
            ? "contact-content direction-right"
            : "contact-content"
        }
      >
        <div className="contact-content-wrapper">
          <div className="contact-content-options">
            <div className="contact-content-option">
              <h3>{language?.Contact?.contact_us_on}</h3>
              <div className="contact-logo-wrapper">
                <img src="/images/whatsapp-text-logo.png" alt="Whatsapp logo" />
              </div>
              <button
                className="contact-whatsapp-button"
                style={{ backgroundColor: "#25d366" }}
              >
                {language?.Contact?.whatsapp_chat}
              </button>
            </div>
            <div className="contact-content-option">
              <h3>{language?.Contact?.contact_us_on} </h3>
              <div className="contact-logo-wrapper">
                <img src="/images/facebook-text-logo.png" alt="facebook logo" />
              </div>
              <button
                className="contact-messenger-button"
                style={{ backgroundColor: "#3b5998" }}
              >
                {language?.Contact?.facebook_chat}
              </button>
            </div>
            <div className="contact-content-option">
              <h3>{language?.Contact?.phone_number}</h3>
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
