import React from "react";
import "../styles/services.css";
import { motion, useTransform, useSpring } from "motion/react";
import { MoveRight } from "lucide-react";
import { useOutletContext, useNavigate } from "react-router-dom";
import ImageShapesContainer from "../components/ImageShapesContainer";
import { useLanguageContext } from "../context/LanguageProvider";

function Services() {
  const { stopLenis, startLenis } = useOutletContext();
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  const scrollToElement = (id) => {
    stopLenis();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    startLenis();
  };

  return (
    <motion.div
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
    >
      <header className="services-header-wrapper">
        <div
          className={
            language.language === "ar"
              ? "services-header direction-right"
              : "services-header"
          }
        >
          <div className="header-hero-text">
            <h1>{language?.Services?.title}</h1>
            <p>{language?.Services?.subtitle}</p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer image="architect-working-with-virtual-3d-projection.jpg" />
          </div>
        </div>
      </header>

      <div
        className={
          language.language === "ar"
            ? "services-links-container direction-right"
            : "services-links-container"
        }
      >
        <a onClick={() => scrollToElement("branding")}>
          {language?.Services?.links?.branding}
        </a>
        <a onClick={() => scrollToElement("marketing")}>
          {language?.Services?.links?.marketing}
        </a>
        <a onClick={() => scrollToElement("graphic_design")}>
          {language?.Services?.links?.graphic_design}
        </a>
        <a onClick={() => scrollToElement("digital_transformation")}>
          {language?.Services?.links?.digital_transformation}
        </a>
        <a onClick={() => scrollToElement("social_media_management")}>
          {language?.Services?.links?.social_media_management}
        </a>
        <a onClick={() => scrollToElement("software_and_web_development")}>
          {language?.Services?.links?.software_and_web_development}
        </a>
        <a onClick={() => scrollToElement("custom-service")}>...</a>
      </div>
      <section
        className={
          language.language === "ar"
            ? "services-content direction-right"
            : "services-content"
        }
      >
        {language?.Services?.types &&
          Object.entries(language?.Services?.types).map(
            ([key, value], index) => {
              return (
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.03 }}
                  viewport={{ amount: 0.99 }}
                  transition={{ duration: 0.4 }}
                  className="services-service"
                  id={key}
                >
                  {index % 2 != 0 && (
                    <div className="services-service-options">
                      <motion.div
                        initial={{ backgroundColor: "#E5F5FF" }}
                        whileInView={{ backgroundColor: "#CDE9FF" }}
                        viewport={{ amount: 0.99 }}
                        transition={{ duration: 0.4 }}
                        className="services-service-img"
                      >
                        <img
                          src={language?.Services?.types[key]?.img}
                          alt="placeholder"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ backgroundColor: "#E5F5FF" }}
                        whileInView={{ backgroundColor: "#CDE9FF" }}
                        viewport={{ amount: 0.99 }}
                        transition={{ duration: 0.4 }}
                        className="services-service-option"
                      >
                        <div className="services-service-option-text">
                          <h1>{language?.Services?.prices}</h1>
                          <MoveRight
                            className="services-service-arrows"
                            // size={30}
                          />
                        </div>
                        <div className="services-service-option-text">
                          <h1>{language?.Services?.inquire}</h1>
                          <MoveRight
                            className="services-service-arrows"
                            // size={30}
                          />
                        </div>
                      </motion.div>
                    </div>
                  )}
                  <motion.div
                    className="services-service-wrapper"
                    initial={{ backgroundColor: "#E5F5FF" }}
                    whileInView={{ backgroundColor: "#CDE9FF" }}
                    viewport={{ amount: 0.99 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="services-service-head">
                      <h1>{language?.Services?.types[key]?.title}</h1>
                      <p>{language?.Services?.types[key]?.subtitle}</p>
                    </div>
                    <div className="services-service-list">
                      {language?.Services?.types &&
                        Object.entries(
                          language?.Services?.types[key]?.list
                        ).map(([key2, value], index) => {
                          return (
                            <div
                              className="services-service-list-item"
                              key={index}
                            >
                              <h3>
                                {
                                  language?.Services?.types[key]?.list[key2]
                                    ?.title
                                }
                              </h3>
                              <p>
                                {
                                  language?.Services?.types[key]?.list[key2]
                                    ?.subtitle
                                }
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </motion.div>
                  {index % 2 === 0 && (
                    <div className="services-service-options">
                      <motion.div
                        initial={{ backgroundColor: "#E5F5FF" }}
                        whileInView={{ backgroundColor: "#CDE9FF" }}
                        viewport={{ amount: 0.99 }}
                        transition={{ duration: 0.4 }}
                        className="services-service-img"
                      >
                        <img
                          src={language?.Services?.types[key]?.img}
                          alt="placeholder"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ backgroundColor: "#E5F5FF" }}
                        whileInView={{ backgroundColor: "#CDE9FF" }}
                        viewport={{ amount: 0.99 }}
                        transition={{ duration: 0.4 }}
                        className="services-service-option"
                      >
                        <div className="services-service-option-text">
                          <h1>{language?.Services?.prices}</h1>
                          <MoveRight
                            className="services-service-arrows"
                            // size={30}
                          />
                        </div>
                        <div className="services-service-option-text">
                          <h1>{language?.Services?.inquire} </h1>
                          <MoveRight
                            className="services-service-arrows"
                            // size={30}
                          />
                        </div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            }
          )}
      </section>
      <div
        className={
          language.language === "ar"
            ? "custom-service direction-right"
            : "custom-service"
        }
        id="custom-service"
      >
        <h1>{language?.Services?.you_name_it}</h1>
        <p>{language?.Services?.you_name_it_subtitle}</p>
        <button
          onClick={() => navigate("/contact")}
          style={
            language.language === "ar"
              ? { marginRight: "0", marginLeft: "auto" }
              : {}
          }
        >
          {language?.Services?.contact_us}
        </button>
      </div>
    </motion.div>
  );
}

export default Services;
