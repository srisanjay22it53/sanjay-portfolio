function Experience() {
  return (
    <section id="experience" className="experience-section">

      <div className="section-heading">
        <h2>Experience</h2>
      </div>

      <div className="experience-card">

        <div className="experience-header">

          <div>
            <h3>Full Stack Developer Intern</h3>

            <p className="company-name">
              Cognifyz Technologies
            </p>
          </div>

          <span className="experience-date">
            May 2025 — June 2025
          </span>

        </div>

        <div className="experience-content">

          <p>
            Developed an Agile Project Management System using
            Java, Spring Boot, Thymeleaf and MySQL following
            MVC architecture.
          </p>

          <p>
            Implemented task and project management features
            including create, update and delete operations.
          </p>

          <p>
            Designed a session-based login and logout system
            for user authentication.
          </p>

          <p>
            Used Git for version control and project workflow
            management.
          </p>

        </div>

        <div className="experience-tech">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Thymeleaf</span>
          <span>MySQL</span>
          <span>Git</span>
          <span>MVC</span>
        </div>

      </div>

    </section>
  );
}

export default Experience;