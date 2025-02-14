import "./Navbar.css";

const Navbar = ({ activeSection }) => (
  <nav className="navbar">
    <div className="container">
      <a href="#home" className="logo">MyPortfolio</a>
      <div className="nav-links">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
