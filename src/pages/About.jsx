import React from "react";
import "../styles/about.css";
import ImageShapesContainer from "../components/ImageShapesContainer";

function About() {
  return (
    <div className="about">
      <header className="services-header-wrapper">
        <div className="services-header">
          <div className="header-hero-text">
            <h1>About</h1>
            <p>
              We are passionate about helping businesses grow and scale. We
              specialize in web design, branding, marketing, and digital
              transformation. Our team is dedicated to helping you succeed.
            </p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer />
          </div>
        </div>
      </header>
      <section className="about-content">
        <div className="about-content-wrapper">
          <div className="about-content-item">
            <h2>Our Mission</h2>
            <p>
              Our mission is to help businesses grow and succeed. We are
              dedicated to providing the best services to our clients and
              helping them achieve their goals.
            </p>
          </div>
          <div className="about-content-item">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be the leading provider of web design, branding,
              marketing, and digital transformation services. We are committed
              to helping businesses thrive in the digital age.
            </p>
          </div>
          <div className="about-content-item">
            <h2>Our Values</h2>
            <p>
              Our values are integrity, excellence, and innovation. We believe
              in doing the right thing, delivering high-quality work, and
              pushing the boundaries of what is possible.
            </p>
          </div>
          <div className="about-content-item">
            <h2>Our Team</h2>
            <p>
              Our team is made up of talented professionals who are passionate
              about helping businesses succeed. We have a diverse range of
              skills and expertise to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>
      <section className="about-adresses">
        <div className="about-address">
          <h2>Libya</h2>
          <p>1234 Street Name</p>
          <p>trablus, al3asma, 12345</p>
          <p>276 33 10 535 90+</p>
        </div>
        <div className="about-address">
          <h2>Turkey</h2>
          <p>1234 Street Name</p>
          <p>Istanbul, bubuduzu, 12345</p>
          <p>276 33 10 535 90+</p>
        </div>
      </section>
      <section className="about-socials">{/* Add a socials here */}</section>
      <section className="about-map">{/* Add a map here */}</section>
    </div>
  );
}

export default About;
