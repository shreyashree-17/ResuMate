// DisplayFilteredResumeumes.js
import React, { useState } from "react";

const DisplayResumeumes = ({ resumes }) => {
  return (
    <div>
      <ul>
        {/* {resumes.map((resume, index) => (
          <li key={index}>{resume}</li>
        ))} */}
        <div className="score">
          <h2>Education</h2>
          {resumes["qualifications"]}
        </div>
        <div className="score">
          <h2>Achievements</h2>
          {resumes["achievements"]}
        </div>
        <div className="score">
          <h2>Experience</h2>
          {resumes["experience"]}
        </div>
        <div className="score">
          <h2>Projects</h2>
          {resumes["projects"]}
        </div>
        <div className="score">
          <h2>Courses</h2>
          {resumes["courses"]}
        </div>
        <div className="score">
          <h2>Positions of Responsibility</h2>
          {resumes["positions of responsibility"]}
        </div>
      </ul>
    </div>
  );
};

export default DisplayResumeumes;
