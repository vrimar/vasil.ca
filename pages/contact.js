import Layout from '../components/Layout';
import SocialIcons from '../components/SocialIcons';
import { ContactForm } from '../components/ContactForm';

function Contact() {
  return <Layout>
    <div className="container contact-container">
      <div className="contact-col">
        <h2>Contact<span className="accent-color">.</span></h2>
        <p>
          Interested in working with me or have a project in mind? Just drop me a message at <span className="accent-color">info@vasil.ca</span> or use the contact form on the right. I'm currently AVAILABLE for any design, full-stack or front-end gigs.
        </p>
        <SocialIcons />
      </div>
      <div className="contact-col">
        <ContactForm />
      </div>
    </div>
  </Layout>
}

export default Contact;
