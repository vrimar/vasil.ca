import Layout from '../components/Layout';
import SocialIcons from '../components/SocialIcons';
import { ContactForm } from '../components/ContactForm';

function Contact() {
  return <Layout>
    <div className="container contact-container">
      <div className="contact-col">
        <h2>Contact<span className="accent-color">.</span></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, neque ut efficitur sodales, turpis neque vulputate ex, ac feugiat metus mod sapien rutrum sit amet. In maximus turpis quam, eu luctus lorem lacinia nec.
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
