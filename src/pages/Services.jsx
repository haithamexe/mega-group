import React from "react";
import "../styles/services.css";
import { motion, useTransform, useSpring } from "motion/react";
import { MoveRight } from "lucide-react";

function Services() {
  return (
    <div className="services">
      <header className="services-header-wrapper">
        <img
          src="../../public/images/Capgemini_The-Key-to-Designing-Inclusive-Tech.webp"
          alt="placeholder"
        />
        <div className="services-header">
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non tortor bibendum, id luctus erat fermentum. Sed
            sollicitudin, libero sit amet tincidunt ultricies, libero nunc
            scelerisque libero, sit amet tincidunt arcu nisl nec purus. Nullam
            pulvinar risus non tortor bibendum, id luctus erat fermentum. Sed
            sollicitudin, libero sit amet tincidunt ultricies, libero nunc
            scelerisque libero, sit amet tincidunt arcu nisl nec purus.
          </p>
          <p></p>
        </div>
      </header>
      <section className="services-content">
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ amount: 0.99 }}
          transition={{ duration: 0.4 }}
          className="services-service"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non tortor bibendum, id luctus erat fermentum.
                Sed sollicitudin, libero sit amet tincidunt ultricies, libero
                nunc scelerisque libero, sit amet tincidunt arcu nisl nec purus.
                Nullam pulvinar risus non tortor bibendum, id luctus erat
                fermentum. Sed sollicitudin, libero sit amet tincidunt
                ultricies, libero nunc scelerisque libero, sit amet tincidunt
                arcu nisl nec purus.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
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
              <h1>Graphic Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non tortor bibendum, id luctus erat fermentum.
                Sed sollicitudin, libero sit amet tincidunt ultricies, libero
                nunc scelerisque libero, sit amet tincidunt arcu nisl nec purus.
                Nullam pulvinar risus non tortor bibendum, id luctus erat
                fermentum. Sed sollicitudin, libero sit amet tincidunt
                ultricies, libero nunc scelerisque libero, sit amet tincidunt
                arcu nisl nec purus.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non tortor bibendum, id luctus erat fermentum.
                Sed sollicitudin, libero sit amet tincidunt ultricies, libero
                nunc scelerisque libero, sit amet tincidunt arcu nisl nec purus.
                Nullam pulvinar risus non tortor bibendum, id luctus erat
                fermentum. Sed sollicitudin, libero sit amet tincidunt
                ultricies, libero nunc scelerisque libero, sit amet tincidunt
                arcu nisl nec purus.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
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
              <h1>Graphic Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non tortor bibendum, id luctus erat fermentum.
                Sed sollicitudin, libero sit amet tincidunt ultricies, libero
                nunc scelerisque libero, sit amet tincidunt arcu nisl nec purus.
                Nullam pulvinar risus non tortor bibendum, id luctus erat
                fermentum. Sed sollicitudin, libero sit amet tincidunt
                ultricies, libero nunc scelerisque libero, sit amet tincidunt
                arcu nisl nec purus.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non tortor bibendum, id luctus erat fermentum.
                Sed sollicitudin, libero sit amet tincidunt ultricies, libero
                nunc scelerisque libero, sit amet tincidunt arcu nisl nec purus.
                Nullam pulvinar risus non tortor bibendum, id luctus erat
                fermentum. Sed sollicitudin, libero sit amet tincidunt
                ultricies, libero nunc scelerisque libero, sit amet tincidunt
                arcu nisl nec purus.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
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
              <h1>Graphic Design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non tortor bibendum, id luctus erat fermentum.
                Sed sollicitudin, libero sit amet tincidunt ultricies, libero
                nunc scelerisque libero, sit amet tincidunt arcu nisl nec purus.
                Nullam pulvinar risus non tortor bibendum, id luctus erat
                fermentum. Sed sollicitudin, libero sit amet tincidunt
                ultricies, libero nunc scelerisque libero, sit amet tincidunt
                arcu nisl nec purus.
              </p>
            </div>
            <div className="services-service-list">
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
              <div className="services-service-list-item">
                <h3>Logo Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non tortor bibendum, id luctus erat
                  fermentum. Sed sollicitudin, libero sit amet tincidunt
                  ultricies, libero nunc scelerisque libero, sit amet tincidunt
                  arcu nisl nec purus.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Services;
