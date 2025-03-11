import React from "react";
import "../styles/main.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        {/* <section className="footer-head">
          <h1>
            Start a your journy with us. Let's get in touch and discuss your
            next project
          </h1>
        </section> */}
        <section className="footer-body">
          <div className="footer-socials">
            <div className="footer-logo">
              <img
                src="/images/mega-logo-blue-white.png"
                alt="Mega Group Logo"
              />
            </div>
            {/* <div className="footer-social-links">
              <a href="https://www.instagram.com/megagroup.ly/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/megagroup.ly">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://wa.me/218923310535">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div> */}
          </div>
          <div className="footer-links">
            <div className="footer-link">
              <h1>Home</h1>
              <p>Mission</p>
              <p>Services</p>
              <p>Why Us</p>
              <p>Clients</p>
            </div>
            <div className="footer-link footer-services-link">
              <h1>Services</h1>
              <p>Branding</p>
              <p>Marketing</p>
              <p>Graphic Design</p>
              <p>Web Development</p>
              <p>Software Development</p>
              <p>Digital Transformation</p>
              <p>Social Media Management</p>
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
        </section>
        {/* <section className="footer-foot">
          <div className="footer-addressess">
            <div className="footer-address address-no-border">
              <h1>Libya</h1>
              <p>1234 Street Name</p>
              <p>trablus, al3asma, 12345</p>
              <p>276 33 10 535 90+</p>
            </div>
            <div className="footer-address">
              <h1>Turkey</h1>
              <p>1234 Street Name</p>
              <p>Istanbul, bubuduzu, 12345</p>
              <p>276 33 10 535 90+</p>
            </div>
            <div className="footer-rights">
              <h1>Mega Group &copy; 2021-{new Date().getFullYear()}</h1>
            </div>
          </div>
        </section> */}
        <section className="footer-foot">
          <div className="footer-social-links">
            <a href="https://www.instagram.com/megagroup.ly/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/megagroup.ly">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://wa.me/218923310535">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="footer-rights">
            <h1>Mega Group &copy; 2021-{new Date().getFullYear()}</h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
