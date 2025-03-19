import React from "react";
import "../styles/prices.css";
import { CircleCheck, CircleMinus } from "lucide-react";
import ImageShapesContainer from "../components/ImageShapesContainer";
import { motion } from "motion/react";

function Prices() {
  return (
    <motion.div
      className="prices"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
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
            <ImageShapesContainer />
          </div>
        </div>
      </header>
      <div className="prices-links-container">
        <a onClick={() => scrollToElement("branding")} href="#branding">
          Websites And Digital Transformation
        </a>
        <a onClick={() => scrollToElement("marketing")} href="#marketing">
          Social Media and Content Management
        </a>
        <a onClick={() => scrollToElement("contact")} href="#contact">
          More
        </a>
      </div>
      <section className="prices-cards-wrapper">
        <div className="prices-type-header">
          <hr />
          <h1>Websites And Digital Transformation</h1>
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
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Users
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Free Support
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Monthly Reports
            </li>
          </ul>
        </div>
        <div className="price-card">
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
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Users
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Free Support
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Monthly Reports
            </li>
          </ul>
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>Enterprise Plan</p>
            <h1>$900</h1>
            <button className="price-card-button">Get Started</button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Users
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Free Support
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Monthly Reports
            </li>
          </ul>
        </div>
      </section>
      <section className="prices-cards-wrapper">
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
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Users
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Free Support
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Monthly Reports
            </li>
          </ul>
        </div>
        <div className="price-card">
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
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Users
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Free Support
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleMinus fill="#c6d9f3" color="white" />
              Monthly Reports
            </li>
          </ul>
        </div>
        <div className="price-card">
          <div className="price-card-header">
            <p>Enterprise Plan</p>
            <h1>$900</h1>
            <button className="price-card-button">Get Started</button>
          </div>
          <hr />
          <ul className="prices-features">
            <li className="features-head">FEATURES</li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Users
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Free Support
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleCheck fill="#56a8ff" color="white" />
              Monthly Reports
            </li>
          </ul>
        </div>
      </section>

      <section className="custom-service">
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
