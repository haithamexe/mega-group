import React from "react";
import "../styles/contact.css";

function ContactContainer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-head">
          <h1>Start Your Projects</h1>
          <p>Get in touch with us</p>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              placeholder="Message"
              style={{
                resize: "none",
              }}
              //make it so that it doesnt resize
            ></textarea>
            <button onClick={handleSubmit}>Send</button>
          </form>
        </div>
      </div>
      <p>Or</p>
      <button className="whatsapp-button">
        <i className="fab fa-whatsapp"></i>
        <h4>Whatsapp Us</h4>
      </button>
    </div>
  );
}

export default ContactContainer;
