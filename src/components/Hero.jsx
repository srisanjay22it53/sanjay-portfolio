import profileImage from "../assets/sanjay-profile.png";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-label">
          FRONTEND & BACKEND DEVELOPER
        </p>

        <h1 className="hero-name">
          <span className="white">SRI </span>
          <span className="red">SANJAY</span>
          <span className="white"> S</span>
        </h1>

        <h2>
          Java · Spring Boot · React · MongoDB
        </h2>

        <p className="hero-description">
          B.Tech Information Technology graduate passionate about building
          modern, efficient and user-friendly web applications.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-button"
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="secondary-button"
          >
            Let's Connect
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Download CV ↓
          </a>

        </div>

      </div>

      <div className="hero-image-container">

        <img
  src={profileImage}
  alt="Sri Sanjay S - Frontend and Backend Developer"
  className="hero-image"
  width="500"
  height="650"
  loading="eager"
  fetchPriority="high"
/>

      </div>

    </section>
  );
}

export default Hero;