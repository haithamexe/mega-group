import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="about">
      <header className="services-header-wrapper">
        <img
          src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
          alt="placeholder"
        />
        <div className="services-header">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non tortor bibendum, id luctus erat fermentum. Sed
            sollicitudin, libero sit amet
          </p>
          <p></p>
        </div>
      </header>
      <section className="services-content"></section>
    </div>
  );
}

export default About;
