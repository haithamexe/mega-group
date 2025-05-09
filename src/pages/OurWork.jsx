import "../styles/ourWork.css";
import ImageShapesContainer from "../components/ImageShapesContainer";
import { SquareArrowOutUpRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
} from "motion/react";
import { useState } from "react";
import { Languages, MoveUp, Globe, Images, Factory } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { useLanguageContext } from "../context/LanguageProvider";

function OurWork() {
  const [viewMoreWebsites, setViewMoreWebsites] = useState(false);
  const [viewMoreGraphicDesigns, setViewMoreGraphicDesigns] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const { scrollYProgress } = useScroll();
  const { language } = useLanguageContext();

  const { handleScrollToElement } = useOutletContext();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.1) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
  });

  return (
    <motion.div
      className="our-work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
    >
      <header
        className={
          language.language === "ar"
            ? "services-header-wrapper direction-right"
            : "services-header-wrapper"
        }
      >
        <div className="services-header">
          <div
            className="header-hero-text"
            style={language.language === "ar" ? { marginLeft: "auto" } : {}}
          >
            <h1>{language?.Our_Work?.title}</h1>
            <p>{language?.Our_Work?.subtitle}</p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer image="tech-companies.jpg" />
          </div>
        </div>
      </header>
      <section
        className={
          language.language === "ar"
            ? "ourwork-content direction-right"
            : "ourwork-content"
        }
      >
        <div className="services-links-container">
          <a onClick={() => handleScrollToElement("web-development-our-work")}>
            {
              language?.Our_Work?.links
                ?.web_development_and_digital_transformation
            }
          </a>
          <a
            onClick={() =>
              handleScrollToElement("social-media-management-our-work")
            }
          >
            {language?.Our_Work?.links?.social_media_management_and_posts}
          </a>

          <a onClick={() => handleScrollToElement("graphic-design-our-work")}>
            {language?.Our_Work?.links?.graphic_design_and_branding}
          </a>
        </div>
        <div className="ourwork-content-wrapper">
          <div
            className="ourwork-projects-wrapper"
            id="web-development-our-work"
          >
            <div
              className="ourwork-project"
              style={{
                padding: "1rem",
              }}
            >
              <h1>
                {
                  language?.Our_Work?.types
                    ?.web_development_and_digital_transformation.title
                }
              </h1>
              <p>
                {
                  language?.Our_Work?.types
                    ?.web_development_and_digital_transformation.subtitle
                }
              </p>
            </div>
            <div className="ourwork-project">
              <img
                src="/images/projects/websites/1.webp"
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
                src="/images/projects/websites/2.webp"
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
                src="/images/projects/websites/3.webp"
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
                src="/images/projects/websites/4.webp"
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
                src="/images/projects/websites/5.webp"
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
                src="/images/projects/websites/6.webp"
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
                src="/images/projects/websites/7.webp"
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
                src="/images/projects/websites/8.webp"
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
                src="/images/projects/websites/9.webp"
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
                src="/images/projects/websites/10.webp"
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
                src="/images/projects/websites/11.webp"
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
                src="/images/projects/websites/12.webp"
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
                src="/images/projects/websites/13.webp"
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
                src="/images/projects/websites/14.webp"
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
                src="/images/projects/websites/15.webp"
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
                src="/images/projects/websites/16.webp"
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
                src="/images/projects/websites/17.webp"
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
                src="/images/projects/websites/18.webp"
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
                src="/images/projects/websites/41.webp"
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
                src="/images/projects/websites/42.webp"
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
        <div className="ourwork-content-wrapper">
          <div
            className="ourwork-projects-wrapper"
            id="social-media-management-our-work"
          >
            <div
              className="ourwork-project project-post"
              style={{
                padding: "1rem",
              }}
            >
              <h1>
                {
                  language?.Our_Work?.types?.social_media_management_and_posts
                    ?.title
                }
              </h1>
              <p>
                {
                  language?.Our_Work?.types?.social_media_management_and_posts
                    .subtitle
                }
              </p>
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2022-10-05-01.11.34-2-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2022-10-05-01.11.38-2-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2022-10-06-21.08.49-2-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2022-10-06-21.09.09-2-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2022-10-06-21.09.15-2-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2022-10-06-21.09.18-2-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2023-05-03-6.29.58-AM-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2023-05-03-6.30.03-AM-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/posts/photo_2023-05-03-6.30.27-AM-1024x1024.webp"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="ourwork-content-wrapper">
          <div
            className="ourwork-projects-wrapper"
            id="graphic-design-our-work"
          >
            <div
              className="ourwork-project project-post"
              style={{
                padding: "1rem",
              }}
            >
              <h1>
                {language?.Our_Work?.types?.graphic_design_and_branding.title}
              </h1>
              <p>
                {
                  language?.Our_Work?.types?.graphic_design_and_branding
                    .subtitle
                }
              </p>
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/agar.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>

            <div className="ourwork-project project-post">
              <img
                src="/images/logos/az.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/bunian.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/cloud.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/lujain.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/majal.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/maps.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/mesc.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/mobtakarat.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/qafla.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/rahma.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/refqa.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/royal.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/sonbla.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/vpet.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
            <div className="ourwork-project project-post">
              <img
                src="/images/logos/zain.png"
                alt="Graphic Design 1"
                className="ourwork-project-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {showBar && (
          <div className="home-sidebar">
            <motion.div
              onClick={() => {
                handleScrollToElement("web-development-our-work");
              }}
              className="home-scroll-to-top"
              initial={{
                right: 0,
                bottom: 35 * 5,
                opacity: 0,
              }}
              animate={{
                right: 40,
                opacity: 1,
              }}
              exit={{
                right: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.1,
              }}
            >
              <Globe
                style={{
                  width: "100%",
                  height: "100%",
                }}
                size="30"
              />
            </motion.div>

            <motion.div
              onClick={() => {
                handleScrollToElement("social-media-management-our-work");
              }}
              className="home-scroll-to-top"
              initial={{
                right: 0,
                bottom: 35 * 3,
                opacity: 0,
              }}
              animate={{
                right: 40,
                opacity: 1,
              }}
              exit={{
                right: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Images
                style={{
                  width: "100%",
                  height: "100%",
                }}
                size="30"
              />
            </motion.div>
            <motion.div
              onClick={() => {
                handleScrollToElement("graphic-design-our-work");
              }}
              className="home-scroll-to-top"
              initial={{
                right: 0,
                bottom: 35,
              }}
              animate={{
                right: 40,
                opacity: 1,
              }}
              exit={{
                right: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <Factory
                style={{
                  width: "100%",
                  height: "100%",
                }}
                size="30"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default OurWork;
