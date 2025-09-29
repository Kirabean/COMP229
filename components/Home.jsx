import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-main-card">
      <div className="home-left">
        <img src="/headshot.jpg" alt="Profile" className="home-profile-img" />
        <h2 className="home-name">Yasser Nabi</h2>
        <p className="home-role">Software Developer</p>
        <p className="home-location">Toronto, Canada</p>
        <Link to="/Contact">
          <button className="home-contact-btn">Contact me</button>
        </Link>
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
          import { Link } from 'react-router-dom';
          <Link to="/about">
            <button className="home-contact-btn">About me</button>
          </Link>
          <Link to="/project">
            <button className="home-contact-btn">My Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
