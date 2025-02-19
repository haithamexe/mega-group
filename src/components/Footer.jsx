import React from "react";
import "../styles/main.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        {/* <div className="">hello sir</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div>
        <div className="">hello</div> */}
        <div className="footer-head">
          <div className="footer-links">
            <div className="footer-link">
              <h1>Home</h1>
              <p>Mission</p>
              <p>Services</p>
              <p>Why Us</p>
              <p>Clients</p>
            </div>
            <div className="footer-link">
              <h1>Services</h1>
              <p>Branding</p>
              <p>Marketing</p>
              <p>Graphic Design</p>
              <p>Digital Transformation</p>
              <p>Social Media Management</p>
              <p>Software Development</p>
            </div>
            <div className="footer-link">
              <h1>Prices</h1>
              <p>Prices</p>
              <p>Prices</p>
            </div>
            <div className="footer-link">
              <h1>Our Work</h1>
              <p>Case Studies</p>
              <p>Projects</p>
            </div>
            <div className="footer-link">
              <h1>Contact</h1>
              <p>Get in Touch</p>
              <p>Location</p>
              <p>FAQ</p>
            </div>
            <div className="footer-link">
              <h1>About</h1>
              <p>Team</p>
              <p>History</p>
              <p>Testimonials</p>
            </div>
          </div>
        </div>
        <div className="footer-foot">
          <div className="footer-addressess">
            <div className="footer-address no-border-address">
              <h1>Libya</h1>
              <p>1234 Street Name</p>
              <p>trablus, al3asma, 12345</p>
            </div>
            <div className="footer-address">
              <h1>Turkey</h1>
              <p>1234 Street Name</p>
              <p>Istanbul, bubuduzu, 12345</p>
            </div>
            <div className="footer-socials">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="footer-logo">
              {/* <img
                src="/images/mega-logo-blue-white.png"
                alt="Mega Group Logo"
              /> */}
            </div>
            {/* <MapboxComponent /> */}
          </div>
          <div className="footer-contact">
            <div className="footer-contact-year">
              <h1>Mega Group </h1>
              <p>2021-{new Date().getFullYear()}</p>
            </div>
            <div className="footer-logo">
              <img
                src="/images/mega-logo-blue-white.png"
                alt="Mega Group Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
