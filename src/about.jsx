import "./about.css";

export default function About() {
  return (
    <div className="about-container about-flex">
      <div className="about-left">
        <img
          className="about-image-large"
          src="/headshot2.jpg"
          alt="Yaser Nabi"
          width="340"
          height="440"
        />
      </div>
      <div className="about-right">
        <p>
          Hi, I'm Yaser! I'm a Toronto-based Software Developer currently completing my Advanced Diploma in Software Engineering Technology - AI at Centennial College. I live and breathe code. My passion lies in building things—from the logic on the server to the interface on the screen. I enjoy the entire development process, whether it's architecting a database in SQL, crafting a responsive front-end with React, or containerizing applications with Docker in my homelab. When I'm not studying, you can find me tinkering with my Linux server, deploying new services, or building web applications to solve everyday problems. I believe in writing clean, efficient code and am always eager to learn new technologies and best practices. I'm actively looking for my next challenge in a software development role where I can contribute to a great team and continue to grow. Check out my projects below and feel free to get in touch!
        </p>
        <div className="skills-section">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li><strong>Languages & Tools:</strong> JavaScript, Python, HTML, CSS, SQL, C#, Java, Docker, Git, Bash</li>
            <li><strong>Frameworks & Libraries:</strong> React, Node.js, Express, jQuery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
