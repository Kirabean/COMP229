export default function Home() {
  return (
    <div className="home-main-card">
      <div className="home-left">
        <img src="/HEADSHOT.jpg" alt="Profile" className="home-profile-img" />
        <h2 className="home-name">Yasser Nabi</h2>
        <p className="home-role">Software Developer</p>
        <p className="home-location">Toronto, Canada</p>
        <button className="home-contact-btn" onClick={() => window.location.href = "/contact"}>Contact me</button>
        <div className="home-socials">
          <a href="https://github.com/yasernabi" target="_blank" rel="noopener" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/in/yasernabi" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="mailto:ynabi@my.centennialcollege.ca" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>
      <div className="home-right">
        <h2>Welcome to my Portfolio</h2>
        <p>
          I build clean, functional, and efficient digital experiences.<br />
          My mission is to transform complex problems into intuitive solutions through code, continuous learning, and a focused user-first approach.
        </p>
        <p>
          I am currently a student at Centennial College,<br />
          pursuing AI - Software Engineering Technology.
        </p>
        <p>
          AVAILABLE FOR WORK<span>SEPT'25</span>
        </p>
        <div className="home-btns">
          <button className="home-contact-btn" onClick={() => window.location.href = "/about"}>About me</button>
          <button className="home-contact-btn" onClick={() => window.location.href = "/project"}>My Projects</button>
        </div>
      </div>
    </div>
  );
}
