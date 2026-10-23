function Skills() {
  const skills = [
    { name: "Java", category: "Programming" },
    { name: "Python", category: "Programming" },
    { name: "Spring Boot", category: "Framework" },
    { name: "Flask", category: "Framework" },
    { name: "HTML", category: "Web" },
    { name: "CSS", category: "Web" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "GitHub", category: "Tools" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span>{skill.category}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;