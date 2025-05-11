import React, { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import { MoveUp, MoveRight, Languages } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { useOutletContext, Link } from "react-router-dom";
import ContactContainer from "../components/ContactContainer";
import { useLanguageContext } from "../context/LanguageProvider";

function Home() {
  const {
    forceSmoothScroll,
    stopLenis,
    startLenis,
    handleScrollToBottom,
    handleScrollToElement,
  } = useOutletContext();

  const { language } = useLanguageContext();

  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["end center", "start start"],
  });
  const { scrollYProgress: scrollMission } = useScroll({});
  const { scrollYProgress: scrollWhyUs } = useScroll({});
  const [showSideBar, setShowSideBar] = useState(false);

  const { scrollY } = useScroll();
  const paddingTop = useTransform(scrollYProgress, [0, 0.1], [0, 11], {
    clamp: false,
  });
  const missionTop = useTransform(scrollMission, [0, 0.16], [-300, -190], {
    clamp: false,
  });

  const [scrollToElement, setScrollToElement] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const topVar = -355;

  const [whyUsscrollValue, setWhyUsScrollValue] = useState(0);

  const paddingRightWhyUs = useTransform(scrollWhyUs, [0, 0.1], [0, 100], {
    clamp: false,
  });

  const [serviceShowMore, setServiceShowMore] = useState("");

  const handleWindowSize = () => {
    if (window.innerWidth > 900) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    if (scrollToElement === "") return;
    window.scrollTo({
      top: document.getElementById(scrollToElement).offsetTop,
      behavior: "smooth",
    });
    setScrollToElement("");
  }, [scrollToElement]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    });
    window.addEventListener("resize", handleWindowSize);
    handleWindowSize();

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 1200) {
          setShowScrollToTop(true);
        } else {
          setShowScrollToTop(false);
        }
      });
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  useMotionValueEvent(scrollWhyUs, "change", (latest) => {
    console.log("scroll value for why:", latest);
    setWhyUsScrollValue(latest);
  });

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  useMotionValueEvent(scrollWhyUs, "change", (latest) => {
    if (latest >= 0.1) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }
  });

  // function smoothScrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
      s
    >
      <div className="home-hero" id="home-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          // src="/videos/abstract black wave_preview.mp4"
          src="/videos/abstract 3d geometric pattern_preview.mp4"
          // src="/videos/stock-footage-blurred-blue-background-with-diagonal-light-streaks-suitable-for-technology-or-abstract-designs.webm"
        />
        <div
          className={
            language.language === "ar"
              ? "home-hero-content direction-right"
              : "home-hero-content"
          }
        >
          <div className="home-hero-content-inner">
            <h1>{language?.Home?.Hero?.title}</h1>
            <p>{language?.Home?.Hero?.subtitle}</p>
          </div>
        </div>
      </div>
      {/* <div className="home-nav">
        <ul>
          <li>
            <div>
              <a onClick={() => setScrollToElement("mission")}>Mission</a>
            </div>
          </li>
          <li>
            <div>
              <a onClick={() => setScrollToElement("services")}>Services</a>
            </div>
          </li>
          <li>
            <div>
              <a onClick={() => setScrollToElement("why_us")}>Why Us</a>
            </div>
          </li>
          <li>
            <div>
              <a onClick={() => setScrollToElement("clients")}>Clients</a>
            </div>
          </li>
          <li>
            <div>
              <a onClick={handleScrollToBottom}>Language</a>
            </div>
          </li>
        </ul>
      </div> */}
      <AnimatePresence>
        {showSideBar && (
          <div className="home-sidebar">
            <motion.div
              onClick={forceSmoothScroll}
              className="home-scroll-to-top"
              initial={{
                right: 0,
                bottom: !isMobile ? 35 * 5 : 25 * 3.95,
                opacity: 0,
              }}
              animate={{
                right: 40,
                opacity: 1,
                bottom: !isMobile ? 35 * 5 : 25 * 3.95,
              }}
              exit={{
                right: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.1,
              }}
              style={{
                borderColor: "#00D757",
                borderWidth: 3,
              }}
            >
              {/* <MoveUp
                style={{
                  width: "100%",
                  height: "100%",
                }}
                size="30"
              /> */}
              <Link to="/contact">
                <i
                  className="fa-brands fa-whatsapp home-scroll-to-top-icon"
                  style={{
                    fontSize: "2rem",
                    color: "#00D757",
                  }}
                ></i>
              </Link>
            </motion.div>

            <motion.div
              onClick={handleScrollToBottom}
              className="home-scroll-to-top"
              initial={{
                right: 0,
                bottom: !isMobile ? 35 * 3 : 25 * 2.5,
                opacity: 0,
              }}
              animate={{
                right: 40,
                opacity: 1,
                bottom: !isMobile ? 35 * 3 : 25 * 2.5,
              }}
              exit={{
                right: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Languages
                className="home-scroll-to-top-icon"
                // style={{
                //   width: "100%",
                //   height: "100%",
                // }}
                // size="30"
              />
            </motion.div>
            <motion.div
              onClick={forceSmoothScroll}
              className="home-scroll-to-top"
              initial={{
                right: 0,
                bottom: !isMobile ? 35 : 25,
              }}
              animate={{
                right: 40,
                opacity: 1,
                bottom: !isMobile ? 35 : 25,
              }}
              exit={{
                right: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <MoveUp
                className="home-scroll-to-top-icon"
                // style={{
                //   width: "100%",
                //   height: "100%",
                // }}
                // size="30"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* <button onClick={() => setScrollToTop(true)}>Scroll to Top</button> */}
      {/* <motion.div
        animate={{
          top: -350,
        }}
        initial={{
          top: 0,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          top: missionTop,
        }}
        className="home-mission"
        id="mission"
      >
        <div className="home-mission-inner">
          <p>
            Our mission is to empower entrepreneurs and businesses by providing
            cutting-edge branding, marketing, web design, and digital
            transformation solutions. We believe in turning ideas into impactful
            brands and ensuring every business has the tools, strategy, and
            digital presence needed to thrive in today’s competitive landscape.
          </p>
          <img src="/images/stock-vector-business-growth-abstract-concept-vector-illustration-set-goals-motivation-and-collaboration-1823345309.png" />
        </div>
      </motion.div> */}
      <div className="home-mission-container">
        <motion.div
          animate={{
            left: 0,
            opacity: 1,
          }}
          initial={{
            top: topVar,
            left: -320,
            opacity: 0,
          }}
          transition={{
            duration: 1.3,
          }}
          style={{
            top: missionTop,
          }}
          className="home-mission"
          id="mission"
        >
          <div className="home-mission-inner">
            <h1>{language?.Home?.Mission?.box1}</h1>
            <img src="/images/2d-vects/0.jpg" />
          </div>
        </motion.div>
        <motion.div
          animate={{
            top: "-300px",
          }}
          initial={{
            top: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="home-mission"
          id="mission"
        >
          <div className="home-mission-inner">
            <h1>{language?.Home?.Mission?.box2}</h1>

            <img src="/images/2d-vects/10191042.jpg" />
          </div>
        </motion.div>
        <motion.div
          animate={{
            right: 0,
            opacity: 1,
          }}
          initial={{
            top: topVar,
            right: -320,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          style={{
            top: missionTop,
          }}
          className="home-mission"
          id="mission"
        >
          <div className="home-mission-inner">
            <h1>{language?.Home?.Mission?.box3}</h1>
            <img src="/images/2d-vects/4966425.jpg" />
          </div>
        </motion.div>
      </div>

      <div
        className={
          language.language === "ar"
            ? "home-services direction-right"
            : "home-services"
        }
        id="services"
      >
        <motion.div
          whileInView={{ paddingTop: 0 }}
          initial={{ paddingTop: 140 }}
          viewport={{
            amount: "some",
          }}
          className="home-services-hero"
        >
          <motion.h1>{language?.Home?.Services?.title}</motion.h1>
          <motion.div
            style={{
              paddingTop: paddingTop,
            }}
            className="home-services-content"
            ref={servicesRef}
          >
            <h2>{language?.Home?.Services?.subtitle}</h2>
            <p>{language?.Home?.Services?.button}</p>
          </motion.div>
        </motion.div>
        <div className="home-services-inner">
          {language?.Home?.Services?.types.map((service, index) => {
            return (
              <div
                className="home-service"
                onMouseEnter={() =>
                  setServiceShowMore(service?.title.toLowerCase())
                }
                onMouseLeave={() => setServiceShowMore("")}
                style={{
                  cursor: "pointer",
                }}
                key={index}
              >
                <img
                  className={
                    language.language === "ar" ? "direction-right-img" : ""
                  }
                  src={service?.img}
                />
                <div className="home-service-content">
                  <h3>{service?.title}</h3>
                  <p>{service?.subtitle}</p>
                </div>
                <div className="home-service-explore">
                  {serviceShowMore === service.title.toLowerCase() && (
                    <a>Explore More</a>
                  )}
                  <MoveRight className="home-service-explore-button" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={
          language.language === "ar"
            ? "home-why-us-wrapper direction-right"
            : "home-why-us-wrapper"
        }
      >
        <motion.div
          className="home-why-us"
          id="why_us"
          // initial={{
          //   paddingTop: 50,
          // }}
          // viewport={{
          //   amount: 0.99,
          // }}
          // whileInView={{
          //   paddingTop: 100,
          // }}
        >
          <motion.div
            initial={{
              left: -150,
            }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
            }}
            whileInView={{
              left: 0,
            }}
            className="home-why-us-block one"
          >
            <h2>{language?.Home?.Why_Us?.title}</h2>
            <p>{language?.Home?.Why_Us?.subtitle}</p>
          </motion.div>
          <motion.div
            initial={{
              right: -150,
            }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
            }}
            whileInView={{
              right: 0,
            }}
            className={
              whyUsscrollValue >= 0.59 && whyUsscrollValue < 0.61
                ? "home-why-us-block two scrolled-block"
                : "home-why-us-block two"
            }
          >
            <h2>
              {language?.Home?.Why_Us?.types?.all_in_one_digital_help?.title}
            </h2>
            <p>
              {language?.Home?.Why_Us?.types?.all_in_one_digital_help?.subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{
              left: -150,
            }}
            transition={{
              duration: 0.1,
            }}
            whileInView={{
              left: 0,
            }}
            className={
              whyUsscrollValue >= 0.61 && whyUsscrollValue < 0.63
                ? "home-why-us-block three scrolled-block"
                : "home-why-us-block three"
            }
          >
            <h2>{language?.Home?.Why_Us?.types?.proven_results?.title}</h2>
            <p>{language?.Home?.Why_Us?.types?.proven_results?.subtitle}</p>
          </motion.div>
          <motion.div
            initial={{
              right: -150,
            }}
            transition={{
              duration: 0.1,
            }}
            whileInView={{
              right: 0,
            }}
            className={
              whyUsscrollValue >= 0.63 && whyUsscrollValue < 0.65
                ? "home-why-us-block four scrolled-block"
                : "home-why-us-block four"
            }
          >
            <h2>
              {language?.Home?.Why_Us?.types?.flexible_future_proof?.title}
            </h2>
            <p>
              {language?.Home?.Why_Us?.types?.flexible_future_proof?.subtitle}
            </p>
          </motion.div>
          <motion.div
            initial={{
              left: -150,
            }}
            transition={{
              duration: 0.1,
            }}
            whileInView={{
              left: 0,
            }}
            className={
              whyUsscrollValue >= 0.65 && whyUsscrollValue < 0.67
                ? "home-why-us-block five scrolled-block"
                : "home-why-us-block five"
            }
          >
            <h2>{language?.Home?.Why_Us?.types?.tools_for_tomorrow?.title}</h2>
            <p>{language?.Home?.Why_Us?.types?.tools_for_tomorrow?.subtitle}</p>
          </motion.div>
          <motion.div
            initial={{
              right: -150,
            }}
            transition={{
              duration: 0.1,
            }}
            whileInView={{
              right: 0,
            }}
            className={
              whyUsscrollValue >= 0.67 && whyUsscrollValue < 0.7
                ? "home-why-us-block six scrolled-block"
                : "home-why-us-block six"
            }
          >
            <h2>{language?.Home?.Why_Us?.types?.teamwork_first?.title}</h2>
            <p>{language?.Home?.Why_Us?.types?.teamwork_first?.subtitle}</p>
          </motion.div>
          <motion.div
            initial={{
              left: -150,
            }}
            transition={{
              duration: 0.08,
            }}
            whileInView={{
              left: 0,
            }}
            className={
              whyUsscrollValue >= 0.7 && whyUsscrollValue < 0.72
                ? "home-why-us-block seven scrolled-block"
                : "home-why-us-block seven"
            }
          >
            <h2>{language?.Home?.Why_Us?.types?.fast_reliable?.title}</h2>
            <p>{language?.Home?.Why_Us?.types?.fast_reliable?.subtitle}</p>
          </motion.div>
          <motion.div
            initial={{
              right: -150,
            }}
            transition={{
              duration: 0.08,
            }}
            whileInView={{
              right: 0,
            }}
            className={
              whyUsscrollValue >= 0.72 && whyUsscrollValue < 0.75
                ? "home-why-us-block eight scrolled-block"
                : "home-why-us-block eight"
            }
          >
            <h2>{language?.Home?.Why_Us?.types?.active_support?.title}</h2>
            <p>{language?.Home?.Why_Us?.types?.active_support?.subtitle}</p>
          </motion.div>
        </motion.div>
      </div>
      <div
        className={
          language.language === "ar"
            ? "home-clients direction-right"
            : "home-clients"
        }
        id="clients"
      >
        <div className="home-clients-inner">
          <h1>{language?.Home?.Clients?.title}</h1>
          <div className="home-clients-logos">
            <img src="/images/logos/agar.png" alt="client image" />
            <img src="/images/logos/az.png" alt="client image" />
            <img src="/images/logos/bunian.png" alt="client image" />
            <img src="/images/logos/cloud.png" alt="client image" />
            <img src="/images/logos/lujain.png" alt="client image" />
            <img src="/images/logos/majal.png" alt="client image" />
            <img src="/images/logos/maps.png" alt="client image" />
            <img src="/images/logos/mesc.png" alt="client image" />
            <img src="/images/logos/mobtakarat.png" alt="client image" />
            <img src="/images/logos/qafla.png" alt="client image" />
            <img src="/images/logos/rahma.png" alt="client image" />
            <img src="/images/logos/refqa.png" alt="client image" />
            <img src="/images/logos/royal.png" alt="client image" />
            <img src="/images/logos/sonbla.png" alt="client image" />
            <img src="/images/logos/vpet.png" alt="client image" />
            <img src="/images/logos/zain.png" alt="client image" />
          </div>
        </div>
        <ContactContainer scrollYProgress={scrollMission} />
      </div>
    </motion.div>
  );
}

export default Home;
