import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Fariz Salim. All Rights Reserved.</p>
        </div>
        <div className="social-links">
          <a href="https://id.linkedin.com/in/achmad-fariz-salim" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/farizsalim" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FaGithub />
          </a>
          <a href="https://wa.me/082237993366" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/farizsalim1009/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
