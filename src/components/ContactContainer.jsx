import React from "react";
import "../styles/contact.css";
import { motion, useTransform } from "motion/react";
import { useLanguageContext } from "../context/LanguageProvider";

function ContactContainer({ scrollYProgress }) {
  const { language } = useLanguageContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  const top = useTransform(scrollYProgress, [0.925, 0.97], [80, -80]);

  return (
    <motion.div
      style={{
        top: top,
      }}
      className="contact-container"
    >
      <div className="contact">
        <div className="contact-head">
          <h1>{language?.Contact?.form?.title}</h1>
          <p>{language?.Contact?.form?.subtitle}</p>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder={language?.Contact?.form?.name} />
            <input type="email" placeholder={language?.Contact?.form?.email} />
            <input type="text" placeholder={language?.Contact?.form?.subject} />
            <textarea
              placeholder={language?.Contact?.form?.message}
              style={{
                resize: "none",
              }}
            ></textarea>
            <button onClick={handleSubmit}>
              {language?.Contact?.form?.submit}
            </button>
          </form>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
        }}
      >
        {language?.Contact?.form?.or}
      </p>
      <button className="whatsapp-button">
        <i className="fab fa-whatsapp"></i>
        <h4> {language?.Contact?.form?.whatsapp}</h4>
      </button>
    </motion.div>
  );
}

export default ContactContainer;
