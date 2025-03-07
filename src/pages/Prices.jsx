import React from "react";
import "../styles/prices.css";
import { CircleCheck, CircleMinus } from "lucide-react";

function Prices() {
  return (
    <div className="prices">
      <header className="services-header-wrapper">
        <img
          src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
          alt="placeholder"
        />
        <div className="services-header">
          <h1>Prices</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non tortor bibendum, id luctus erat fermentum. Sed
            sollicitudin, libero sit amet tincidunt ultricies, libero nunc
            scelerisque libero, sit amet tincidunt arcu nisl nec purus. Nullam
            pulvinar risus non tortor bibendum, id luctus erat fermentum. Sed
            sollicitudin, libero sit amet tincidunt ultricies, libero nunc
            scelerisque libero, sit amet tincidunt arcu nisl nec purus.
          </p>
          <p></p>
        </div>
      </header>
      <section className="prices-cards-wrapper">
        <div className="prices-type-header">
          <h1>Websites And Digital Transformation</h1>
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
          <h1>Social Media and Content Management</h1>
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
              <CircleCheck fill="black" color="white" />
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              10 Users
            </li>
            <li>
              <CircleMinus fill="gray" color="white" />
              Free Support
            </li>
            <li>
              <CircleMinus fill="gray" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleMinus fill="gray" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleMinus fill="gray" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleMinus fill="gray" color="white" />
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
              <CircleCheck fill="black" color="white" />
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              10 Users
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              Free Support
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleMinus fill="gray" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleMinus fill="gray" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleMinus fill="gray" color="white" />
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
              <CircleCheck fill="black" color="white" />
              5GB Storage
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              10GB Storage
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              10 Users
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              Free Support
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              100GB Bandwidth
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              10 Email Accounts
            </li>
            <li>
              <CircleCheck fill="black" color="white" />
              Custom Domain
            </li>

            <li>
              <CircleCheck fill="black" color="white" />
              Monthly Reports
            </li>
          </ul>
        </div>
      </section>
      <section className="prices-packages">
        <div className="prices-packages-header">
          <h1>Need help with an individual project?</h1>
          <div className="packages-footer">
            <p>
              Contact us for a custom quote. We are here to help you with a
              single project or a long-term partnership.
            </p>
            <button className="packages-button">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prices;
