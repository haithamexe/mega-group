import React from "react";
import "../styles/contact.css";
import { motion, useTransform } from "motion/react";

function ContactContainer({ scrollYProgress }) {
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
          <h1>Start Your Journey</h1>
          <p>Get in touch with us</p>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              placeholder="Message"
              style={{
                resize: "none",
              }}
              //make it so that it doesnt resize
            ></textarea>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Or
      </p>
      <button className="whatsapp-button">
        <i className="fab fa-whatsapp"></i>
        <h4>Whatsapp Us</h4>
      </button>
    </motion.div>
  );
}

export default ContactContainer;
