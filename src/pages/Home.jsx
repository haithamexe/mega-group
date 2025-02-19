import React, { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import { MoveUp, MoveRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useOutletContext } from "react-router-dom";

function Home() {
  const { forceSmoothScroll } = useOutletContext();

  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["end center", "start start"],
  });
  const { scrollYProgress: scrollMission } = useScroll({});

  const { scrollY } = useScroll();
  const paddingTop = useTransform(scrollYProgress, [0, 0.1], [0, 11], {
    clamp: false,
  });
  const missionTop = useTransform(scrollMission, [0, 0.1], [-350, -240], {
    clamp: false,
  });

  const [scrollToElement, setScrollToElement] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const topVar = -350;

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

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  function smoothScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="home">
      <div className="home-hero" id="home-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/videos/stock-footage-abstract-grey-and-white-clouds-gradient-background.webm"
          // src="../../public/videos/stock-footage-blurred-blue-background-with-diagonal-light-streaks-suitable-for-technology-or-abstract-designs.webm"
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
      <div
        onClick={forceSmoothScroll}
        className="home-scroll-to-top"
        style={{ display: showScrollToTop ? "block" : "none" }}
      >
        <MoveUp
          style={{
            width: "100%",
            height: "100%",
          }}
          size="30"
        />
        {/* <button onClick={() => setScrollToTop(true)}>Scroll to Top</button> */}
      </div>
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
            left: -400,
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
            <img src="/images/stock-vector-business-growth-abstract-concept-vector-illustration-set-goals-motivation-and-collaboration-1823345309.png" />
          </div>
        </motion.div>
        <motion.div
          animate={{
            top: -350,
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
            right: -400,
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
            <p>Inquire now</p>
          </motion.div>
        </motion.div>
        <div className="home-services-inner">
          <div className="home-service">
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
              {/* <a>Explore</a> */}
              <MoveRight size="30" />
            </div>
          </div>
          <div className="home-service odd-service">
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Marketing</h3>
              <p>
                From social media marketing to SEO, our marketing team can help
                you reach your target audience, drive traffic, and generate
                leads.
              </p>
            </div>
          </div>
          <div className="home-service ">
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Graphic Design</h3>
              <p>
                Our graphic designers can help you create stunning visuals from
                UI to UX or any other design you are looking for that helps
                capture attention, communicate your message, and elevate your
                brand.
              </p>
            </div>
          </div>
          <div className="home-service odd-service ">
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Digital Transformation</h3>
              <p>
                Our digital transformation experts can help you leverage the
                power of technology to streamline your operations, improve
                efficiency, and drive growth.
              </p>
            </div>
          </div>
          <div className="home-service ">
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Social Media Management</h3>
              <p>
                Our social media experts can help you create engaging content,
                build a loyal following, and drive traffic to your website.
              </p>
            </div>
          </div>
          <div className="home-service  odd-service">
            <img src="/images/mega-logo-blue.png" />
            <div className="home-service-content">
              <h3>Software Development</h3>
              <p>
                Our software developers can help you build custom software
                solutions like web, mobile or desktop apps that streamline your
                operations, improve efficiency, and drive growth.
              </p>
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
