import "../styles/ourWork.css";
import ImageShapesContainer from "../components/ImageShapesContainer";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function OurWork() {
  const [viewMoreWebsites, setViewMoreWebsites] = useState(false);
  const [viewMoreGraphicDesigns, setViewMoreGraphicDesigns] = useState(false);

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
            onClick={() => scrollToElement("digital-transformation")}
            href="#digital-transformation"
          >
            Web Development And Digital Transformation
          </a>

          <a
            onClick={() => scrollToElement("social-media-management")}
            href="#social-media-management"
          >
            Social Media Management And Graphic Design
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
              <h1>Web Development</h1>
              <p>
                We have worked with a variety of clients to create beautiful
                websites, brand identity, and marketing materials. Take a look
                at some of our work below.
              </p>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/1.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Azar Media</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/2.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Darb Al-Sholah</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/3.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Deep Ocean</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/4.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Joury Group</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/5.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Mubtakarat</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/6.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Loujin</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/7.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Cloud Infotech</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/8.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Mermaid</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/9.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Mega Shop</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/10.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Esme Media</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/11.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Alhashan</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/12.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>MESC</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/13.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Alsunbula</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/14.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Alsapia</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/15.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Alrifqat</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/16.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>AlBunyan</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/17.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Exprt SC</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/18.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Almajalat</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/41.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>El Waseet</h2>
                <a href="https://www.megagroup.com" target="_blank">
                  <SquareArrowOutUpRight className="ourwork-link-arrow" />
                </a>
              </div>
            </div>
            <div className="ourwork-project">
              <img
                src="../../public/images/projects/websites/42.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
              <div className="ourwork-project-text">
                <h2>Alqatarat</h2>
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
