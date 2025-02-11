import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/public/videos/stock-footage-spinning-rings-with-blue-sky-slow-abstract-animation-with-a-blue-and-green-sky-as-background.webm "
        />
        <div className="home-hero-content">
          <div className="home-hero-content-inner">
            <h1>Turn Your Ideas into a Thriving Business</h1>
            <p>
              At MEGA, we help entrepreneurs and businesses build, grow, and
              scale with expert branding, marketing, web design, and digital
              transformation strategies. Whether you’re launching or rebranding,
              we’re here to take you to the next level.
            </p>
          </div>
        </div>
      </div>
      <div className="home-nav">
        <ul>
          <li>
            <div>
              <a href="#mission">MISSION</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#services">SERVICES</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#why_us">WHY US</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#clients">CLIENTS</a>
            </div>
          </li>
          {/* need to add the contact us section as Link*/}
          {/* <li>
            <a href="#contact_us">CONTACT US</a>
          </li> */}
        </ul>
      </div>
      <div className="home-mission" id="mission">
        <div className="home-mission-inner">
          <h2>Our Mission</h2>
          <p>
            Our mission is to help businesses and entrepreneurs build, grow, and
            scale with expert branding, marketing, web design, and digital
            transformation strategies. We believe in the power of creativity,
            innovation, and collaboration to help you turn your ideas into a
            thriving business.
          </p>
        </div>
      </div>
      <div className="home-services" id="services">
        <h2>Our Services</h2>
        <p>
          We offer a range of services to help you build, grow, and scale your
          business. From branding and marketing to web design and digital
          transformation, we have the expertise and experience to take you to
          the next level.
        </p>
      </div>
      <div className="home-why-us" id="why_us">
        <h2>Why Us</h2>
        <p>
          At MEGA, we’re more than just a branding and marketing agency. We’re a
          team of experts who are passionate about helping businesses and
          entrepreneurs succeed. With our creative solutions and innovative
          strategies, we can help you turn your ideas into a thriving business.
        </p>
      </div>
      <div className="home-clients" id="clients">
        <h2>Our Clients</h2>
        <p>
          We’ve had the privilege of working with some amazing clients over the
          years. From startups to Fortune 500 companies, we’ve helped businesses
          of all sizes build, grow, and scale with expert branding, marketing,
          web design, and digital transformation strategies.
        </p>
      </div>
    </div>
  );
}

export default Home;
