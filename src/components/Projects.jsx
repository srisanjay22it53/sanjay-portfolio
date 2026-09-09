function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI Learning Path Generator",
      description:
        "A full-stack web application that analyzes user input and generates customized week-by-week learning paths.",
      technologies: [
        "Java",
        "Spring Boot",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github:
        "https://github.com/srisanjay22it53/AI-Learning-Path-Generator.git",
      liveDemo:
        "https://ai-learning-path-generator-6wr9.onrender.com"
    },

    {
      number: "02",
      title: "MERN Stack E-Commerce Website",
      description:
        "A full-stack e-commerce web application with product listing, product management and customer-facing features.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js"
      ],
      github:
        "https://github.com/srisanjay22it53/Jesco-Oil-Management",
      liveDemo:
        "https://jesco-oil-management.vercel.app/"
    },

    {
      number: "03",
      title: "Turf Booking Website",
      description:
        "A responsive turf booking website that allows users to explore turfs, view details and check available booking slots.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github:
        "https://github.com/srisanjay22it53/turf-bookin",
      liveDemo:
        "https://turf-bookin.vercel.app/"
    },

    {
      number: "04",
      title: "ARAI Building Construction",
      description:
        "A responsive construction company website designed to showcase services, projects and company information.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github:
        "https://github.com/srisanjay22it53/arai-building-construction",
      liveDemo:
        "https://arai-building-construction.vercel.app/"
    },

    {
      number: "05",
      title: "Feedback & Sentiment Analysis System",
      description:
        "A full-stack Flask web application where users can submit feedback with ratings and receive automatic sentiment analysis as Positive, Negative, or Neutral. Feedback is stored in a cloud MySQL-compatible database, with an admin dashboard for feedback and sentiment statistics.",
      technologies: [
        "Python",
        "Flask",
        "Flask-SQLAlchemy",
        "MySQL / TiDB Cloud",
        "HTML",
        "CSS",
        "JavaScript",
        "TextBlob"
      ],
      github:
        "https://github.com/srisanjay22it53/feedback-system",
      liveDemo:
        "https://feedback-system-theta-eight.vercel.app/"
    },

    {
      number: "06",
      title: "Coliseum Badminton",
      description:
        "A badminton website designed with a modern responsive interface for showcasing the badminton facility and its information.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github:
        "https://github.com/srisanjay22it53/coliseum-badminton",
      liveDemo:
        "https://coliseum-badminton.vercel.app/"
    },

    {
      number: "07",
      title: "AgileFlow – Agile Project Management System",
      description:
        "An Agile project management system for managing projects, tasks, team members, priorities, deadlines and task progress.",
      technologies: [
        "Java",
        "Spring Boot",
        "Thymeleaf",
        "HTML",
        "CSS",
        "MySQL",
        "Spring Data JPA",
        "Hibernate",
        "Maven",
        "Git",
        "GitHub"
      ],
      github:
        "https://github.com/srisanjay22it53/agileflow-project-management",
      liveDemo:
        "https://agileflow-project-management-xi.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="section-heading">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub ↗
                </a>

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    Live Demo ↗
                  </a>
                )}

              </div>

            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">

              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;