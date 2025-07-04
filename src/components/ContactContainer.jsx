import React from "react";
import "../styles/contact.css";
import { motion, useTransform } from "motion/react";
import { useLanguageContext } from "../context/LanguageProvider";

function ContactContainer({ scrollYProgress }) {
  const { language } = useLanguageContext();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      // Here you would typically send the form data to your server or API
      console.log("Form submitted:", formData);
      window.open(
        "mailto:info@megagroup.ly?subject=" +
          encodeURIComponent(formData.subject) +
          "&body=" +
          encodeURIComponent(formData.message),
        "_blank"
      );
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
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
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              placeholder={language?.Contact?.form?.name}
            />
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              placeholder={language?.Contact?.form?.email}
            />
            <input
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              type="text"
              placeholder={language?.Contact?.form?.subject}
            />
            <textarea
              placeholder={language?.Contact?.form?.message}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows="5"
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
      <a
        href="https://wa.me/905351033276" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
        style={{ color: "#fff", textDecoration: "none" }}
      >
        <button className="whatsapp-button">
          <i className="fab fa-whatsapp"></i>
          <h4> {language?.Contact?.form?.whatsapp}</h4>
        </button>
      </a>
    </motion.div>
  );
}

export default ContactContainer;
