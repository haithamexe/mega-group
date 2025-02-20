import React, { useState, useEffect, useRef } from "react";
import "../styles/home.css";
import { MoveUp, MoveRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useOutletContext } from "react-router-dom";

function Home() {
  const { forceSmoothScroll, stopLenis, startLenis } = useOutletContext();

  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["end center", "start start"],
  });
  const { scrollYProgress: scrollMission } = useScroll({});
  const { scrollYProgress: scrollWhyUs } = useScroll({});

  const { scrollY } = useScroll();
  const paddingTop = useTransform(scrollYProgress, [0, 0.1], [0, 11], {
    clamp: false,
  });
  const missionTop = useTransform(scrollMission, [0, 0.1], [-370, -170], {
    clamp: false,
  });

  const [scrollToElement, setScrollToElement] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const topVar = -320;

  const [whyUsscrollValue, setWhyUsScrollValue] = useState(0);

  const paddingRightWhyUs = useTransform(scrollWhyUs, [0, 0.1], [0, 100], {
    clamp: false,
  });

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

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // function smoothScrollToTop() {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

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
            top: -370,
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
      <div className="home-why-us-wrapper">
        <motion.div
          className="home-why-us"
          id="why_us"
          whileInView={() => {
            console.log("in view");
          }}
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
              whyUsscrollValue >= 0.44 && whyUsscrollValue < 0.48
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
              whyUsscrollValue >= 0.48 && whyUsscrollValue < 0.522
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
              whyUsscrollValue >= 0.522 && whyUsscrollValue < 0.562
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
              whyUsscrollValue >= 0.562 && whyUsscrollValue < 0.62
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
              whyUsscrollValue >= 0.62 && whyUsscrollValue < 0.642
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
              whyUsscrollValue >= 0.642 && whyUsscrollValue < 0.682
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
              whyUsscrollValue >= 0.682 && whyUsscrollValue < 0.722
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
