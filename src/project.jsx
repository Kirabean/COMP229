import "./project.css";

export default function Project() {
  return (
    <>
      <div className="project-container-grid">
        <div className="project-item">
          <div className="project-image">
            <img src="public/WordCloud.png" alt="Wikipedia Word Cloud" />
          </div>
          <div className="project-description">
            <h3>Wikipedia Word Cloud</h3>
            <p>The Wikipedia Word Cloud project visualizes the most frequently used words in Wikipedia articles, providing insights into the topics covered in the articles.</p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Wikipedia API</span>
            </div>
            <div className="project-button">
              <button onClick={() => window.open("https://studentweb.cencol.ca/ynabi/comp125/Assignment4/PartB/partb.html")}>Live Demo</button>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src="public/Homelab.png" alt="Homelab Server" />
          </div>
          <div className="project-description">
            <h3>Personal Homelab Server</h3>
            <p>The Personal Homelab Server project involves setting up a personal server at home for hosting various services, such as file sharing, media streaming, and web hosting.</p>
            <div className="project-tech">
              <span>Linux</span>
              <span>Docker</span>
              <span>Networking</span>
            </div>
            <div className="project-links">
              <a href="#">Coming Soon</a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src="public/BugCatch.png" alt="Bug Catcher Game" />
          </div>
          <div className="project-description">
            <h3>Bug Catcher Game</h3>
            <p>A simple game built with JavaScript where players catch bugs in a web application.</p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <div className="project-links">
              <a href="https://studentweb.cencol.ca/ynabi/comp125/Assignment6/game.html" target="_blank" rel="noopener">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
