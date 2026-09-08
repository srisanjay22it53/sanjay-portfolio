function About() {
  return (
    <section id="about" className="about-section">

      <div className="section-heading">
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">

          <h3>
            Building ideas into practical web applications.
          </h3>

          <p>
            I’m a B.Tech Information Technology graduate who enjoys
            turning ideas into clean, practical and user-friendly web
            applications. I like understanding how things work,
            solving problems and building solutions that are simple
            and useful.
          </p>

          <p>
            My experience with Java, Spring Boot, JavaScript, React,
            MySQL and MongoDB has helped me work across both frontend
            and backend development. I’m always looking to learn,
            improve and take on new challenges — because I believe
            good development is built on curiosity, consistency and trust.
          </p>

        </div>

        <div className="about-details">

          <div className="detail-card">
            <span>Education</span>
            <strong>B.Tech Information Technology</strong>
            <small>KGiSL Institute of Technology</small>
          </div>

          <div className="detail-card">
            <span>CGPA</span>
            <strong>7.85</strong>
          </div>

          <div className="detail-card">
            <span>Location</span>
            <strong>Coimbatore, Tamil Nadu</strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;