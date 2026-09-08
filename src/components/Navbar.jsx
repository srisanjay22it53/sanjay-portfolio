function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        PORTFOLIO
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="https://www.linkedin.com/in/sri-sanjay-s-64b546247"
        target="_blank"
        rel="noreferrer"
        className="cv-button"
      >
        LinkedIn ↗
      </a>

    </nav>
  );
}

export default Navbar;