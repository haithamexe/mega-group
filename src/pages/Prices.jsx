import React from "react";
import "../styles/prices.css";
import { CircleCheck, CircleMinus } from "lucide-react";
import ImageShapesContainer from "../components/ImageShapesContainer";
import { motion } from "motion/react";
import { useOutletContext } from "react-router-dom";

function Prices() {
  const { handleScrollToElement } = useOutletContext();

  return (
    <motion.div
      className="prices"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
    >
      <header className="services-header-wrapper">
        <div className="services-header">
          <div className="header-hero-text">
            <h1>Prices</h1>
            <p>
              We offer a variety of plans to fit your needs. Whether you are
              looking for a website, branding, marketing a full digital
              transformation, we have you covered.
            </p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer image="businesspeople-working-finance-accounting-analyze-financi.jpg" />
          </div>
        </div>
      </header>
      <div className="prices-links-container">
        <a onClick={() => handleScrollToElement("prices-websites")}>
          Websites And Digital Transformation
        </a>
        <a onClick={() => handleScrollToElement("prices-social-media-content")}>
          Social Media and Content Management
        </a>
        <a onClick={() => handleScrollToElement("prices-more")}>More</a>
      </div>
      <section className="prices-cards-wrapper" id="prices-websites">
        <div className="prices-type-header">
          <hr />
          <h1>Websites And Digital Transformation</h1>
          <hr />
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>Basic Plan</p>
            <h1>$500</h1>
            <button className="price-card-button">Get Started</button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />1 Langauge
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Domain
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Hosting
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />1 Website Emails
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Responsive Design
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              E-commerce Store
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />1 Year Support
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Admin Panel
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Payment Gateway Integration
            </li>

            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Custom Design
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              SEO Optimization
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Live Chat Support
            </li>
          </ul>
        </div>
        <div
          className="price-card"
          style={{
            scale: "1.05",
          }}
        >
          <div className="price-card-popup">
            <h1>Best Offer</h1>
          </div>
          <div className="price-card-header">
            <p>Business Plan</p>
            <h1>$900</h1>
            <button className="price-card-button middle-plan">
              Get Started
            </button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />2 Langauges
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Domain
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Hosting
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />5 Website Emails
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Responsive Design
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              E-commerce Store
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />1 Year Support
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Wordpress Admin Panel
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Payment Gateway Integration
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Custom Design
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              SEO Optimization
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Live Chat Support
            </li>
          </ul>
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>Enterprise Plan</p>
            <h1>$1500</h1>
            <button className="price-card-button">Get Started</button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Multiple Langauges
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Domain
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Hosting
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10+ Website Emails
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Responsive Design
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              E-commerce Store
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />1 Year Support
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Dedicated Admin Panel
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Payment Gateway Integration
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Custom Design
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              SEO Optimization
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Live Chat Support
            </li>
          </ul>
        </div>
      </section>
      <section
        className="prices-cards-wrapper"
        id="prices-social-media-content"
      >
        <div className="prices-type-header">
          <hr />
          <h1>Social Media and Content Management</h1>
          <hr />
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>Basic Plan</p>
            <h1>$300</h1>
            <button className="price-card-button">Get Started</button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Desings
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Social Media Posts
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Visual Identity
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Branding
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Social Media Ads
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Social Media Management
            </li>
          </ul>
        </div>
        <div
          className="price-card"
          style={{
            scale: "1.05",
          }}
        >
          <div className="price-card-popup">
            <h1>Best Offer</h1>
          </div>
          <div className="price-card-header">
            <p>Business Plan</p>
            <h1>$500</h1>
            <button className="price-card-button middle-plan">
              Get Started
            </button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              20 Desings
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Social Media Posts
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Visual Identity
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Branding
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Social Media Ads
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Social Media Management
            </li>
          </ul>
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>Enterprise Plan</p>
            <h1>$1000</h1>
            <button className="price-card-button">Get Started</button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              30 Desings
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Social Media Posts
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Visual Identity
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Branding
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Social Media Ads
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Social Media Management
            </li>
          </ul>
        </div>
      </section>

      <section className="custom-service" id="prices-more">
        <h1>
          you Need help with an individual Service or want custom tailored
          package?
        </h1>
        <p>
          Contact us for a custom quote. We are here to help you with a single
          project or a long-term partnership.
        </p>
        <button className="packages-button">Contact Us</button>
      </section>
    </motion.div>
  );
}

export default Prices;
