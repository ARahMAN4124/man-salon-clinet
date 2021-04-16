import React from "react";
import "./ContactUs.css";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <section className="contact py-5">
      <div className="container">
        <h2
          className="main-text display-4 text-center"
          style={{ fontFamily: "Times" }}
        >
          Contact Us
        </h2>

        <div className="row">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
