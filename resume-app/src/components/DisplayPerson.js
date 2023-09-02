import React from "react";
import "./DisplayFilteredResumes.css"; // Import a CSS file for styling

const DisplayFilteredResumes = ({ resumes }) => {
  return (
    <div className="resume-container">
      <ul>
        <div className="resume-section">
          <h2>Education</h2>
          <div className="resume-content">
            {resumes["qualifications"] &&
              resumes["qualifications"]
                .split("\\n")
                .map((achievement, index) => (
                  <div key={index} className="resume-item">
                    {achievement}
                  </div>
                ))}
          </div>
        </div>
        <div className="resume-section">
          <h2>Achievements</h2>
          <div className="resume-content">
            {resumes["achievements"] &&
              resumes["achievements"].split("\\n").map((achievement, index) => (
                <div key={index} className="resume-item">
                  {achievement}
                </div>
              ))}
          </div>
        </div>
        <div className="resume-section">
          <h2>Experience</h2>
          <div className="resume-content">
            {resumes["experience"] &&
              resumes["experience"].split("\\n").map((achievement, index) => (
                <div key={index} className="resume-item">
                  {achievement}
                </div>
              ))}
          </div>
        </div>
        <div className="resume-section">
          <h2>Projects</h2>
          <div className="resume-content">
            {resumes["projects"] &&
              resumes["projects"].split("\\n").map((achievement, index) => (
                <div key={index} className="resume-item">
                  {achievement}
                </div>
              ))}
          </div>
        </div>
        <div className="resume-section">
          <h2>Courses</h2>
          <div className="resume-content">
            {resumes["courses"] &&
              resumes["courses"].split("\\n").map((achievement, index) => (
                <div key={index} className="resume-item">
                  {achievement}
                </div>
              ))}
          </div>
        </div>
        <div className="resume-section">
          <h2>Skills</h2>
          <div className="resume-content">
            {resumes["skills"] &&
              resumes["skills"].split("\\n").map((achievement, index) => (
                <div key={index} className="resume-item">
                  {achievement}
                </div>
              ))}
          </div>
        </div>
        <div className="resume-section">
          <h2>Positions of Responsibility</h2>
          <div className="resume-content">
            {resumes["positions of responsibility"] &&
              resumes["positions of responsibility"]
                .split("\\n")
                .map((achievement, index) => (
                  <div key={index} className="resume-item">
                    {achievement}
                  </div>
                ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default DisplayFilteredResumes;
