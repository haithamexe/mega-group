import React from "react";
import ImageShapesContainer from "../components/ImageShapesContainer";

function Contact() {
  return (
    <div className="contact-us">
      <header className="services-header-wrapper">
        <div className="services-header">
          <div className="header-hero-text">
            <h1>Contact</h1>
            <p>
              We would love to hear from you! Please fill out the form below and
              we will get back to you as soon as possible.
            </p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer />
          </div>
        </div>
      </header>
      <section className="services-content"></section>
    </div>
  );
}

export default Contact;
