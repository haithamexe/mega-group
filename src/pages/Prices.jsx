import React from "react";
import "../styles/prices.css";
import { CircleCheck, CircleMinus } from "lucide-react";
import ImageShapesContainer from "../components/ImageShapesContainer";
import { motion } from "motion/react";
import { useOutletContext } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageProvider";

function Prices() {
  const { handleScrollToElement } = useOutletContext();
  const { language } = useLanguageContext();
  return (
    <motion.div
      className="prices"
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
            <h1>{language?.Prices?.title}</h1>
            <p>{language?.Prices?.subtitle}</p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer image="businesspeople-working-finance-accounting-analyze-financi.jpg" />
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
        <a onClick={() => handleScrollToElement("prices-websites")}>
          {language?.Prices?.links?.websites_and_digital_transformation}
        </a>
        <a onClick={() => handleScrollToElement("prices-social-media-content")}>
          {language?.Prices?.links?.social_media_and_content_management}
        </a>
        <a onClick={() => handleScrollToElement("prices-more")}>
          {language?.Prices?.links?.more}
        </a>
      </div>
      <section
        className={
          language.language === "ar"
            ? "prices-cards-wrapper direction-right"
            : "prices-cards-wrapper"
        }
        id="prices-websites"
      >
        <div className="prices-type-header">
          <hr />
          <h1>
            {language?.Prices?.types?.websites_and_digital_transformation.title}
          </h1>
          <hr />
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[0]?.title
              }
            </p>
            <h1>
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[0]?.price
              }
            </h1>
            <button className="price-card-button">
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[0]?.button
              }
            </button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[0]?.features?.title
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[0]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[1]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[2]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[3]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[4]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[5]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[6]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[7]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[8]
              }
            </li>

            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[9]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[10]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[0].features.features_list[11]
              }
            </li>
          </ul>
        </div>
        <div
          className="price-card"
          style={{
            scale: "1.05",
          }}
        >
          <div
            className="price-card-popup"
            style={
              language.language === "ar"
                ? {
                    left: "1.5rem",
                    right: "unset",
                  }
                : {}
            }
          >
            <h1>
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.best_offer
              }
            </h1>
          </div>
          <div className="price-card-header">
            <p>
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[1]?.title
              }
            </p>
            <h1>
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[1]?.price
              }
            </h1>
            <button className="price-card-button middle-plan">
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[1]?.button
              }
            </button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[1].features.title
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[0]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[1]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[2]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[3]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[4]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[5]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[6]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[7]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[8]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[9]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[10]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[1].features.features_list[11]
              }
            </li>
          </ul>
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[2]?.title
              }
            </p>
            <h1>
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[2]?.price
              }
            </h1>
            <button className="price-card-button">
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  ?.plans[2]?.button
              }
            </button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[0]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[1]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[2]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[3]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[4]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[5]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[6]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[7]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[8]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[9]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[10]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.websites_and_digital_transformation
                  .plans[2].features.features_list[11]
              }
            </li>
          </ul>
        </div>
      </section>
      <section
        className={
          language.language === "ar"
            ? "prices-cards-wrapper direction-right"
            : "prices-cards-wrapper"
        }
        id="prices-social-media-content"
      >
        <div className="prices-type-header">
          <hr />
          <h1>
            {language?.Prices?.types?.social_media_and_content_management.title}
          </h1>
          <hr />
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[0]?.title
              }
            </p>
            <h1>
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[0]?.price
              }
            </h1>
            <button className="price-card-button">
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[0]?.button
              }
            </button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[0].features.title
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[0].features.features_list[0]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[0].features.features_list[1]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[0].features.features_list[2]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[0].features.features_list[3]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[0].features.features_list[4]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[0].features.features_list[5]
              }
            </li>
          </ul>
        </div>
        <div
          className="price-card"
          style={{
            scale: "1.05",
          }}
        >
          <div
            className="price-card-popup"
            style={
              language.language === "ar"
                ? {
                    left: "1.5rem",
                    right: "unset",
                  }
                : {}
            }
          >
            <h1>
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.best_offer
              }
            </h1>
          </div>
          <div className="price-card-header">
            <p>
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[1]?.title
              }
            </p>
            <h1>
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[1]?.price
              }
            </h1>
            <button className="price-card-button middle-plan">
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[1]?.button
              }
            </button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[1].features.title
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[1].features.features_list[0]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[1].features.features_list[1]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[1].features.features_list[2]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[1].features.features_list[3]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[1].features.features_list[4]
              }
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[1].features.features_list[5]
              }
            </li>
          </ul>
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[2]?.title
              }
            </p>
            <h1>
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[2]?.price
              }
            </h1>
            <button className="price-card-button">
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[2]?.button
              }
            </button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">
              {
                language?.Prices?.types?.social_media_and_content_management
                  ?.plans[2].features.title
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[2].features.features_list[0]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[2].features.features_list[1]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[2].features.features_list[2]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[2].features.features_list[3]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[2].features.features_list[4]
              }
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              {
                language?.Prices?.types?.social_media_and_content_management
                  .plans[2].features.features_list[5]
              }
            </li>
          </ul>
        </div>
      </section>

      <section
        className={
          language.language === "ar"
            ? "custom-service direction-right"
            : "custom-service"
        }
        id="prices-more"
      >
        <h1>{language?.Prices?.custom?.title}</h1>
        <p>{language?.Prices?.custom?.subtitle}</p>
        <button
          className="packages-button"
          style={
            language.language === "ar"
              ? { marginRight: "0", marginLeft: "auto" }
              : {}
          }
        >
          {language?.Prices?.custom?.contact_us}
        </button>
      </section>
    </motion.div>
  );
}

export default Prices;
