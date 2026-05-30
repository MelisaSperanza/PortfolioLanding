import '../styles/cv.css'


function CV() {
return (

    <div
  className="cv-background"
  
>
<div
className="cv-page"

> <div className="cv-container"> <header className="cv-header"> <h1>Melisa Speranza</h1> <p>Junior Full Stack Developer (Java, React & Node.js)</p> </header>

```
    <section className="cv-section">
      <h2>Contact</h2>

      <p>📍 Barcelona, Spain</p>
      <p>📞 (+34) 686 749 368</p>
      <p>✉️ melisb3@gmail.com</p>

      <a
        href="https://linkedin.com/in/melisa-speranza"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/MelisaSperanza"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://melisasperanza.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        Portfolio
      </a>
    </section>

    <section className="cv-section">
      <h2>Profile</h2>

      <p>
        Junior Full Stack Developer with hands-on experience building web
        applications using Java (Spring Boot), React, JavaScript and
        Node.js.
      </p>

      <p>
        Background in sales, marketing and technical support, bringing
        strong communication skills, problem-solving abilities and a
        user-centered approach to software development.
      </p>

      <p>
        Multiplatform Application Development (DAM) student at IOC.
      </p>
    </section>

    <section className="cv-section">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>JavaScript ES6+</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div>
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Node.js</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div>
          <h3>Database</h3>
          <ul>
            <li>SQL</li>
          </ul>
        </div>

        <div>
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
          </ul>
        </div>

        <div>
          <h3>UI / UX</h3>
          <ul>
            <li>Google UX Design Certificate</li>
            <li>Adobe Illustrator</li>
            <li>GIMP</li>
            <li>Inkscape</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
          </ul>
        </div>

        <div>
          <h3>Concepts</h3>
          <ul>
            <li>CRUD Applications</li>
            <li>REST APIs</li>
            <li>JSON</li>
            <li>Component Architecture</li>
            <li>Version Control</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="cv-section">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Vehicle Management Web Application</h3>

        <p>
          Full Stack web application for vehicle inventory management,
          sales tracking and report generation.
        </p>

        <ul>
          <li>RESTful API with Spring Boot</li>
          <li>Responsive React frontend</li>
          <li>Search and filtering system</li>
          <li>JSON data processing</li>
          <li>Google Sheets integration</li>
          <li>Multi-vehicle report generation</li>
          <li>Git & GitHub workflow</li>
        </ul>

        <p>
          <strong>Technologies:</strong> Java, Spring Boot, React,
          JavaScript, SQL, JSON, Git, GitHub
        </p>
      </div>

      <div className="project-card">
        <h3>Personal Portfolio Website</h3>

        <ul>
          <li>Built with React</li>
          <li>Styled using Tailwind CSS</li>
          <li>Responsive design</li>
          <li>UX-focused interface</li>
          <li>Deployed with Netlify</li>
          <li>Continuous improvements</li>
        </ul>

        <a
          href="https://melisasperanza.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </section>

    <section className="cv-section">
      <h2>Previous Experience</h2>

      <p>
        Sales, marketing and technical support experience. Full details
        available on LinkedIn.
      </p>

      <a
        href="https://linkedin.com/in/melisa-speranza"
        target="_blank"
        rel="noreferrer"
      >
        View LinkedIn Profile
      </a>
    </section>
  </div>
</div>

</div>
);
}

export default CV;
