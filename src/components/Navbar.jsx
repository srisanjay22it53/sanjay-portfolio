import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar${menuOpen ? " nav-open" : ""}`}
      aria-label="Primary navigation"
    >

      <div className="logo">
        PORTFOLIO
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div className="nav-links" id="primary-navigation">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <a
        href="https://www.linkedin.com/in/sri-sanjay-s-64b546247"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-button"
      >
        LinkedIn ↗
      </a>

    </nav>
  );
}

export default Navbar;