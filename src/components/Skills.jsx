function Skills() {
  const skills = [
    { name: "Java", category: "Programming" },
    { name: "JavaScript", category: "Programming" },
    { name: "Spring Boot", category: "Framework" },
    { name: "React", category: "Framework" },
    { name: "HTML", category: "Web" },
    { name: "CSS", category: "Web" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Git", category: "Tools" },
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