import "../styles/ourWork.css";
import ImageShapesContainer from "../components/ImageShapesContainer";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion } from "motion/react";

function OurWork() {
  return (
    <motion.div
      className="our-work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <header className="services-header-wrapper">
        <div className="services-header">
          <div className="header-hero-text">
            <h1>Our Work</h1>
            <p>
              We have worked with a variety of clients to create beautiful
              websites and branding. Take a look at some of our work below.
            </p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer />
          </div>
        </div>
      </header>
      <section className="ourwork-content">
        <div className="services-links-container">
          <a
            onClick={() => scrollToElement("graphic-design")}
            href="#graphic-design"
          >
            Graphic Design
          </a>
          <a
            onClick={() => scrollToElement("digital-transformation")}
            href="#digital-transformation"
          >
            Digital Transformation
          </a>
          <a
            onClick={() => scrollToElement("social-media-management")}
            href="#social-media-management"
          >
            Social Media Management
          </a>
          <a
            onClick={() => scrollToElement("software-and-web-development")}
            href="#software-and-web-development"
          >
            Software And Web Development
          </a>
        </div>
        <div className="ourwork-content-wrapper">
          <div className="ourwork-projects-wrapper" id="graphic-design">
            <div
              className="ourwork-project"
              style={{
                padding: "1rem",
              }}
            >
              <h1>Graphic Design</h1>
              <p>
                We have worked with a variety of clients to create beautiful
                websites, brand identity, and marketing materials. Take a look
                at some of our work below.
              </p>
            </div>
            <div className="ourwork-project">
              <img
                src="/images/graphic-designs.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
              />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
          </div>
          <div className="ourwork-projects-wrapper" id="graphic-design">
            <div
              className="ourwork-project"
              style={{
                padding: "1rem",
              }}
            >
              <h1>Graphic Design</h1>
              <p>
                We have worked with a variety of clients to create beautiful
                websites, brand identity, and marketing materials. Take a look
                at some of our work below.
              </p>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img src="/images/graphic-designs.webp" alt="Graphic Design 1" />
              <div className="ourwork-project-text">
                <h2>Mega Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default OurWork;
