function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-heading">
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-content">

        <div className="contact-text">

          <h3>
            Have a project or opportunity?
          </h3>

          <p>
            I'm open to opportunities, collaborations and interesting
            projects. Feel free to get in touch.
          </p>

        </div>

        <div className="contact-links">

          <a
            href="mailto:sanjaysanjay58694@gmail.com"
            className="contact-item"
          >
            <span>Email</span>
            <strong>sanjaysanjay58694@gmail.com</strong>
            <span>↗</span>
          </a>

          <a
            href="tel:+917358849081"
            className="contact-item"
          >
            <span>Phone</span>
            <strong>+91 73588 49081</strong>
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sri-sanjay-s-64b546247"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>LinkedIn</span>
            <strong>Connect with me</strong>
            <span>↗</span>
          </a>

          <a
            href="https://github.com/srisanjay22it53"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>GitHub</span>
            <strong>View my projects</strong>
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;