import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <a href="/"><img className="logo" src="public/YasserNabi.png" alt="Description of image" width="400" height="500"/></a>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | {" "}
          <Link to="/education">Education</Link> | {" "}
          <Link to="/project">Projects</Link> | {" "}
          <Link to="/contact">Contact</Link> | {" "}
          <Link to="/services">Services</Link>
          <button className="resume-btn" onClick={() => window.open("/Yaser Nabi Resume.pdf", "_blank")}>Resume</button>
        </nav>
        {/* <button onClick={() => window.open("src/assets/Yaser Nabi Resume.pdf", "_blank")}>Resume</button> */}
      </header>
    </>
  );
}
