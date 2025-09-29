import "./education.css";

export default function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="degree">AI - Software Engineering Technology Co-Op</span>
            <span className="school">Centennial College</span>
            <span className="years">2025-2027</span>
          </div>
        </div>
        <div className="timeline-line" />
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="degree">High School Diploma</span>
            <span className="school">Bill Hogarth Secondary School</span>
            <span className="years">2016-2020 French Immersion</span>
          </div>
        </div>
      </div>
    </div>
  );
}
