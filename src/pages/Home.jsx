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
import { useOutletContext } from "react-router-dom";
import ContactContainer from "../components/ContactContainer";

function Home() {
  const {
    forceSmoothScroll,
    stopLenis,
    startLenis,
    handleScrollToBottom,
    handleScrollToElement,
  } = useOutletContext();

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
  const missionTop = useTransform(scrollMission, [0, 0.16], [-355, -190], {
    clamp: false,
  });

  const [scrollToElement, setScrollToElement] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const topVar = -355;

  const [whyUsscrollValue, setWhyUsScrollValue] = useState(0);

  const paddingRightWhyUs = useTransform(scrollWhyUs, [0, 0.1], [0, 100], {
    clamp: false,
  });

  const [serviceShowMore, setServiceShowMore] = useState("");

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
      transition={{ duration: 0.7 }}
    >
      <div className="home-hero" id="home-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/stock-footage-abstract-grey-and-white-clouds-gradient-background.webm"
          // src="/videos/stock-footage-blurred-blue-background-with-diagonal-light-streaks-suitable-for-technology-or-abstract-designs.webm"
        />
        <div className="home-hero-content">
          <div className="home-hero-content-inner">
            <h1>Build Tomorrow, Today</h1>
            <p>
              At MEGA, we help entrepreneurs and businesses build, grow, and
              scale with expert branding, marketing, web design, and digital
              transformation strategies. Whether you’re launching or rebranding,
              we’re here to take you to the next level.
            </p>
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
              <i
                className="fa-brands fa-whatsapp"
                style={{
                  // width: "100%",
                  // height: "100%",
                  fontSize: "2rem",
                  color: "#00D757",
                }}
              ></i>
            </motion.div>

            {/* <motion.div
              onClick={() =>
                handleScrollToElement(document.getElementById("services"))
              }
              className="home-scroll-to-top"
              initial={{
                right: 0,
                bottom: 35 * 7,
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
                duration: 0.15,
              }}
            >
              <p
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                Services
              </p>
            </motion.div> */}
            {/* <motion.div
              onClick={() =>
                handleScrollToElement(document.getElementById("why_us"))
              }
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
                duration: 0.2,
              }}
            >
              <p
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                Why Us
              </p>
            </motion.div> */}
            <motion.div
              onClick={handleScrollToBottom}
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
              <Languages
                style={{
                  width: "100%",
                  height: "100%",
                }}
                size="30"
              />
            </motion.div>
            <motion.div
              onClick={forceSmoothScroll}
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
              <MoveUp
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
            <h1>Build Better</h1>
            <img src="/images/stock-vector-business-growth-abstract-concept-vector-illustration-set-goals-motivation-and-collaboration-1823345309.png" />
          </div>
        </motion.div>
        <motion.div
          animate={{
            top: topVar,
          }}
          initial={{
            top: 0,
          }}
          transition={{
            duration: 1,
          }}
          // style={{
          //   top: missionTop,
          // }}
          className="home-mission"
          id="mission"
        >
          <div className="home-mission-inner">
            <h1>Build Bigger</h1>

            <img src="/images/stock-vector-business-growth-abstract-concept-vector-illustration-set-goals-motivation-and-collaboration-1823345309.png" />
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
            <h1>Build Smarter</h1>
            <img src="/images/stock-vector-business-growth-abstract-concept-vector-illustration-set-goals-motivation-and-collaboration-1823345309.png" />
          </div>
        </motion.div>
      </div>

      <div className="home-services" id="services">
        <motion.div
          whileInView={{ paddingTop: 0 }}
          initial={{ paddingTop: 140 }}
          viewport={{
            amount: "some",
          }}
          className="home-services-hero"
        >
          <motion.h1>Services</motion.h1>
          <motion.div
            style={{
              paddingTop: paddingTop,
            }}
            className="home-services-content"
            ref={servicesRef}
          >
            <h2>We help businesses build, grow, and scale.</h2>
            <p>Explore Services</p>
          </motion.div>
        </motion.div>
        <div className="home-services-inner">
          <div
            className="home-service"
            onMouseEnter={() => setServiceShowMore("branding")}
            onMouseLeave={() => setServiceShowMore("")}
            style={{
              cursor: "pointer",
            }}
          >
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Branding</h3>
              <p>
                Our branding experts can help you create a brand that resonates
                with your target audience, communicates your values, and sets
                you apart from the competition.
              </p>
            </div>
            <div className="home-service-explore">
              {serviceShowMore === "branding" && <a>Explore More</a>}
              <MoveRight size="30" />
            </div>
          </div>
          <div
            className="home-service odd-service"
            onMouseEnter={() => setServiceShowMore("marketing")}
            onMouseLeave={() => setServiceShowMore("")}
            style={{
              cursor: "pointer",
            }}
          >
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Marketing</h3>
              <p>
                From social media marketing to SEO, our marketing team can help
                you reach your target audience, drive traffic, and generate
                leads.
              </p>
              <div className="home-service-explore">
                {serviceShowMore === "marketing" && <a>Explore More</a>}
                <MoveRight size="30" />
              </div>
            </div>
          </div>
          <div
            className="home-service "
            onMouseEnter={() => setServiceShowMore("graphic_design")}
            onMouseLeave={() => setServiceShowMore("")}
            style={{
              cursor: "pointer",
            }}
          >
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Graphic Design</h3>
              <p>
                Our graphic designers can help you create stunning visuals from
                UI to UX or any other design you are looking for that helps
                capture attention, communicate your message, and elevate your
                brand.
              </p>
              <div className="home-service-explore">
                {serviceShowMore === "graphic_design" && <a>Explore More</a>}
                <MoveRight size="30" />
              </div>
            </div>
          </div>
          <div
            className="home-service odd-service "
            onMouseEnter={() => setServiceShowMore("digital_transformation")}
            onMouseLeave={() => setServiceShowMore("")}
          >
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Digital Transformation</h3>
              <p>
                Our digital transformation experts can help you leverage the
                power of technology to streamline your operations, improve
                efficiency, and drive growth.
              </p>
              <div className="home-service-explore">
                {serviceShowMore === "digital_transformation" && (
                  <a>Explore More</a>
                )}
                <MoveRight size="30" />
              </div>
            </div>
          </div>
          <div
            className="home-service "
            onMouseEnter={() => setServiceShowMore("social_media_management")}
            onMouseLeave={() => setServiceShowMore("")}
            style={{
              cursor: "pointer",
            }}
          >
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Social Media Management</h3>
              <p>
                Our social media experts can help you create engaging content,
                build a loyal following, and drive traffic to your website.
              </p>
              <div className="home-service-explore">
                {serviceShowMore === "social_media_management" && (
                  <a>Explore More</a>
                )}
                <MoveRight size="30" />
              </div>
            </div>
          </div>
          <div
            className="home-service  odd-service"
            onMouseEnter={() =>
              setServiceShowMore("software_and_web_development")
            }
            onMouseLeave={() => setServiceShowMore("")}
            style={{
              cursor: "pointer",
            }}
          >
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Software And Web Development</h3>
              <p>
                Our software developers can help you build custom software
                solutions like web, mobile or desktop apps that streamline your
                operations, improve efficiency, and drive growth.
              </p>
              <div className="home-service-explore">
                {serviceShowMore === "software_and_web_development" && (
                  <a>Explore More</a>
                )}
                <MoveRight size="30" />
              </div>
            </div>
          </div>
          {/* <div className="home-service odd-service last-service">
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Consultation</h3>
              <p>
                Our business consultants can help you identify opportunities,
                overcome challenges, and achieve your business goals.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="home-why-us-wrapper">
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
            <h2>Why Us</h2>
            <p>What sets us apart</p>
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
            <h2>All-in-One Digital Help</h2>
            <p>
              We’ve helped retail, finance, and manufacturing businesses adapt
              to the digital age. Every industry gets a tailored plan.
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
            <h2>Proven Results</h2>
            <p>
              Clients save time, cut costs, and work smarter. We deliver what we
              promise.
            </p>
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
            <h2>Flexible & Future-Proof</h2>
            <p>
              We build systems that grow with you. If your needs change, your
              tools can adapt – no starting over.
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
            <h2>Tools for Tomorrow</h2>
            <p>
              Stay ahead with technology that’s built to last, Easy-to-Use Tech:
              Tools your team will actually enjoy, Always Protected: Guard
              against online threats. We pick tech that works today and
              tomorrow.
            </p>
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
            <h2>Teamwork First</h2>
            <p>
              You’re part of the process. We listen, collaborate, and build
              solutions that fit your goals – not ours.
            </p>
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
            <h2>Fast & Reliable</h2>
            <p>
              In today’s fast-paced world, delays can cost you opportunities,
              customers, and momentum. That’s why we’ve built our entire process
              around speed without compromise. From day one, we work backward
              from your deadlines, breaking projects into clear milestones with
              built-in buffers for unexpected challenges. Our team uses proven
              project management frameworks, like Agile and Scrum, to keep
              workflows smooth and transparent.
            </p>
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
            <h2>Active Support</h2>
            <p>
              We’re here round the clock. Questions? Issues? We’ve got your back
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="home-clients" id="clients">
        <div className="home-clients-inner">
          <h1>Featured Clients</h1>
          <div className="home-clients-logos">
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
            <img src="/images/mega-logo-blue.png" alt="client image" />
          </div>
        </div>
        <ContactContainer scrollYProgress={scrollMission} />
      </div>
    </motion.div>
  );
}

export default Home;
