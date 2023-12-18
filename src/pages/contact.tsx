/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Layout } from "../components/Layout";
import { SocialIcons } from "../components/SocialIcons";
import { ContactForm } from "../components/ContactForm";

function Contact() {
  return (
    <Layout>
      <div className="container contact-container">
        <div className="contact-col">
          <h2>
            Contact<span className="accent-color">.</span>
          </h2>
          <p>
            Interested in working with me or have a project in mind? Just drop
            me a message at <span className="accent-color">info@vasil.ca</span>{" "}
            or use the contact form on the right.
          </p>
          <SocialIcons />
        </div>
        <div className="contact-col">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
