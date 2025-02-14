import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-info">
        <p>If you want to get in touch, feel free to reach me through the following channels:</p>
        <ul>
          <li><FaLinkedin className="icon" /> <a href="https://id.linkedin.com/in/achmad-fariz-salim" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><FaGithub className="icon" /> <a href="https://github.com/farizsalim" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><FaWhatsapp className="icon" /> <a href="https://wa.me/082237993366" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          <li><FaEnvelope className="icon" /> <a href="mailto:farizsalim10@yahoo.co.id" target="_blank" rel="noopener noreferrer">Email (Yahoo)</a> / <a href="mailto:farizsalim.jobs@gmail.com" target="_blank" rel="noopener noreferrer">Email (Gmail)</a></li>
          <li><FaInstagram className="icon" /> <a href="https://www.instagram.com/farizsalim1009/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Send me a message</h3>
        <form action="mailto:farizsalim10@yahoo.co.id" method="get">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
