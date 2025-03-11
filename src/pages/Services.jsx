import React from "react";
import "../styles/services.css";
import { motion, useTransform, useSpring } from "motion/react";
import { MoveRight } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import ImageShapesContainer from "../components/ImageShapesContainer";

function Services() {
  const { stopLenis, startLenis } = useOutletContext();

  const scrollToElement = (id) => {
    stopLenis();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    startLenis();
  };

  return (
    <div className="services">
      <header className="services-header-wrapper">
        {/* <img
          src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
          alt="placeholder"
        /> */}
        <div className="services-header">
          <div className="header-hero-text">
            <h1>Services</h1>
            <p>
              Our team of experts can help you with everything from branding and
              marketing to software development and social media management.
              Explore our services below to see how we can help you grow your
              business.
            </p>
          </div>
          <div className="header-hero-img">
            <ImageShapesContainer />
          </div>
        </div>
      </header>
      {/* <section
        className="services-contetnt"
        style={{
          height: "5vh",
        }}
      ></section> */}
      <div className="services-links-container">
        <a onClick={() => scrollToElement("branding")} href="#branding">
          Branding
        </a>
        <a onClick={() => scrollToElement("marketing")} href="#marketing">
          Marketing
        </a>
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
        <a
          onClick={() => scrollToElement("custom-service")}
          href="#custom-service"
        >
          ...
        </a>
      </div>
      <section className="services-content">
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ amount: 0.99 }}
          transition={{ duration: 0.4 }}
          className="services-service"
          id="branding"
        >
          <motion.div
            className="services-service-wrapper"
            initial={{ backgroundColor: "#E5F5FF" }}
            whileInView={{ backgroundColor: "#CDE9FF" }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.4 }}
          >
            <div className="services-service-head">
              <h1>Branding</h1>
              <p>
                Our branding experts can help you create a brand that resonates
                with your target audience, communicates your values, and sets
                you apart from the competition.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Brand Strategy & Positioning</h3>
                <p>
                  Develop a unique identity by defining your mission, vision,
                  audience personas, and competitive differentiation. Align your
                  brand’s voice and values to resonate emotionally with your
                  target market.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Visual Identity Design</h3>
                <p>
                  Create logos, color palettes, typography, and imagery that
                  reflect your brand’s personality. Ensure consistency across
                  all touchpoints, from packaging to digital platforms.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Competitor Analysis</h3>
                <p>
                  dentify gaps in the market by analyzing competitors’ strengths
                  and weaknesses. Use insights to position your brand as a
                  standout solution.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Rebranding & Evolution</h3>
                <p>
                  Refresh outdated brands with modern aesthetics and messaging
                  while preserving core equity. Ensure alignment with current
                  trends and customer expectations.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Messaging Framework</h3>
                <p>
                  Craft compelling taglines, tone-of-voice guidelines, and
                  storytelling narratives to communicate your brand’s purpose
                  and connect with audiences on a deeper level.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="services-service-options">
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-img"
            >
              <img
                src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
                alt="placeholder"
              />
            </motion.div>
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-option"
            >
              <div className="services-service-option-text">
                <h1>Prices</h1>
                <MoveRight size={30} />
              </div>
              <div className="services-service-option-text">
                <h1>Inquire </h1>
                <MoveRight size={30} />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ amount: 0.99 }}
          transition={{ duration: 0.4 }}
          className="services-service"
          id="marketing"
        >
          <div className="services-service-options">
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-img"
            >
              <img
                src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
                alt="placeholder"
              />
            </motion.div>
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-option"
            >
              <div className="services-service-option-text">
                <h1>Prices</h1>
                <MoveRight size={30} />
              </div>
              <div className="services-service-option-text">
                <h1>Inquire </h1>
                <MoveRight size={30} />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="services-service-wrapper"
            initial={{ backgroundColor: "#E5F5FF" }}
            whileInView={{ backgroundColor: "#CDE9FF" }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.4 }}
          >
            <div className="services-service-head">
              <h1>Marketing</h1>
              <p>
                From social media marketing to SEO, our marketing team can help
                you reach your target audience, drive traffic, and generate
                leads.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Digital Campaign Strategy</h3>
                <p>
                  Plan end-to-end campaigns across SEO, social media, and email,
                  Focus on audience segmentation and channel-specific tactics to
                  maximize Reach.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Social Media Advertising</h3>
                <p>Run targeted ads on Meta, Google, and TikTok.</p>
              </div>
              <div className="services-service-list-item">
                <h3>Analytics & Optimization</h3>
                <p>
                  Adjust strategies in real time based on data-driven insights.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Content Creation</h3>
                <p>
                  Produce blogs, videos, and infographics tailored to audience
                  needs and SEO goals.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Influencer Collaborations</h3>
                <p>
                  Partner with niche influencers to expand reach and
                  credibility.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ amount: 0.99 }}
          transition={{ duration: 0.4 }}
          className="services-service"
          id="graphic-design"
        >
          <motion.div
            className="services-service-wrapper"
            initial={{ backgroundColor: "#E5F5FF" }}
            whileInView={{ backgroundColor: "#CDE9FF" }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.4 }}
          >
            <div className="services-service-head">
              <h1>Graphic Design</h1>
              <p>
                Our graphic designers can help you create stunning visuals from
                UI to UX or any other design you are looking for that helps
                capture attention, communicate your message, and elevate your
                brand.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>UI/UX Design</h3>
                <p>
                  Build user-friendly interfaces for websites and apps,
                  prioritizing intuitive navigation, accessibility, and visual
                  appeal.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Brand Collateral</h3>
                <p>
                  Design print/digital assets like business cards, brochures,
                  and social media templates that align with brand guidelines.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Motion Graphics & Animation</h3>
                <p>
                  Create engaging animated content (e.g., explainer videos,
                  GIFs) to simplify complex ideas and boost retention.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Design Audits</h3>
                <p>
                  Evaluate existing visuals for consistency, responsiveness, and
                  relevance. Recommend updates to stay modern.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="services-service-options">
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-img"
            >
              <img
                src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
                alt="placeholder"
              />
            </motion.div>
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-option"
            >
              <div className="services-service-option-text">
                <h1>Prices</h1>
                <MoveRight size={30} />
              </div>
              <div className="services-service-option-text">
                <h1>Inquire </h1>
                <MoveRight size={30} />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ amount: 0.99 }}
          transition={{ duration: 0.4 }}
          className="services-service"
          id="digital-transformation"
        >
          <div className="services-service-options">
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-img"
            >
              <img
                src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
                alt="placeholder"
              />
            </motion.div>
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-option"
            >
              <div className="services-service-option-text">
                <h1>Prices</h1>
                <MoveRight size={30} />
              </div>
              <div className="services-service-option-text">
                <h1>Inquire </h1>
                <MoveRight size={30} />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="services-service-wrapper"
            initial={{ backgroundColor: "#E5F5FF" }}
            whileInView={{ backgroundColor: "#CDE9FF" }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.4 }}
          >
            <div className="services-service-head">
              <h1>Digital Transformation</h1>
              <p>
                Our digital transformation experts can help you leverage the
                power of technology to streamline your operations, improve
                efficiency, and drive growth.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>E-commerce Solutions</h3>
                <p>
                  Build or upgrade online stores with features like inventory
                  management, secure payment gateways, and multi-channel sales.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Web Presence</h3>
                <p>
                  Develop responsive websites optimized for search engines and
                  user experience. Ensure fast load times and mobile
                  compatibility.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Legacy System Modernization</h3>
                <p>
                  Replace outdated software/hardware with agile, scalable
                  solutions to improve performance and future-proof your
                  business.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Social Media Presence</h3>
                <p>
                  Create and manage profiles on platforms like Facebook,
                  Instagram, and LinkedIn. Engage with followers and monitor
                  feedback.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ amount: 0.99 }}
          transition={{ duration: 0.4 }}
          className="services-service"
          id="social-media-management"
        >
          <motion.div
            className="services-service-wrapper"
            initial={{ backgroundColor: "#E5F5FF" }}
            whileInView={{ backgroundColor: "#CDE9FF" }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.4 }}
          >
            <div className="services-service-head">
              <h1>Social Media Management</h1>
              <p>
                Our social media experts can help you create engaging content,
                build a loyal following, and drive traffic to your website.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Content Strategy & Scheduling</h3>
                <p>
                  Plan platform-specific calendars (Instagram, LinkedIn, TikTok)
                  with a mix of promotional, educational, and entertaining
                  posts.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Community Building</h3>
                <p>
                  Engage followers by responding to comments/DMs, hosting live
                  sessions, and fostering user-generated content campaigns.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Paid Social Campaigns</h3>
                <p>
                  Design ads with precise audience targeting, retargeting, and
                  dynamic creatives to drive sales or sign-ups.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Crisis Management</h3>
                <p>
                  Monitor sentiment and address negative feedback or PR issues
                  swiftly to protect brand reputation.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="services-service-options">
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-img"
            >
              <img
                src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
                alt="placeholder"
              />
            </motion.div>
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-option"
            >
              <div className="services-service-option-text">
                <h1>Prices</h1>
                <MoveRight size={30} />
              </div>
              <div className="services-service-option-text">
                <h1>Inquire </h1>
                <MoveRight size={30} />
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ amount: 0.99 }}
          transition={{ duration: 0.4 }}
          className="services-service"
          id="software-and-web-development"
        >
          <div className="services-service-options">
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-img"
            >
              <img
                src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
                alt="placeholder"
              />
            </motion.div>
            <motion.div
              initial={{ backgroundColor: "#E5F5FF" }}
              whileInView={{ backgroundColor: "#CDE9FF" }}
              viewport={{ amount: 0.99 }}
              transition={{ duration: 0.4 }}
              className="services-service-option"
            >
              <div className="services-service-option-text">
                <h1>Prices</h1>
                <MoveRight size={30} />
              </div>
              <div className="services-service-option-text">
                <h1>Inquire </h1>
                <MoveRight size={30} />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="services-service-wrapper"
            initial={{ backgroundColor: "#E5F5FF" }}
            whileInView={{ backgroundColor: "#CDE9FF" }}
            viewport={{ amount: 0.99 }}
            transition={{ duration: 0.4 }}
          >
            <div className="services-service-head">
              <h1>Software And Web Development</h1>
              <p>
                Our software and web development team can help you build custom
                solutions that meet your unique needs, from websites to mobile
                apps.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>E-commerce Development</h3>
                <p>
                  Create online stores with features like inventory management,
                  secure payment gateways, and multi-channel sales.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Landing Page</h3>
                <p>
                  Design high-converting landing pages for lead generation or
                  product launches.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Mobile Application</h3>
                <p>
                  Develop iOS and Android apps with intuitive interfaces and
                  seamless performance.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Wordpress Websites</h3>
                <p>
                  Customize WordPress websites, themes and plugins to create
                  responsive, SEO-friendly websites.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Fullstack Websites</h3>
                <p>
                  Build dynamic websites with React, Node.js, and MongoDB for
                  fast loading times and scalability.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <div className="custom-service" id="custom-service">
        <h1>You Name It, We Do It</h1>
        <p>
          If you have a specific project in mind that doesn't fit into any of
          the categories above, don't worry! We're here to help. Contact us to
          discuss your needs and get a case study and a custom quote and make
          your ideas come to life.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Services;
