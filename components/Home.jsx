export default function Home() {
  return (
    <div className="home-main-card">
      <div className="home-left">
        <img src="/headshot.jpg" alt="Profile" className="home-profile-img" />
        <h2 className="home-name">Yasser Nabi</h2>
        <p className="home-role">Software Developer</p>
        <p className="home-location">Toronto, Canada</p>
        <button className="home-contact-btn" onClick={() => window.location.href = "/Contact"}>Contact me</button>
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
