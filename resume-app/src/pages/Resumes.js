import "./css/Resumes.css";
import React, { useState } from "react";

const Resumes = ({ resumes, onFilter }) => {
  const [keyword, setKeyword] = useState("");

  const handleFilter = () => {
    onFilter(keyword);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter keyword to filter"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Education</th>
            <th>Skills</th>
            <th>Projects</th>
            <th>Experience</th>
            <th>Achievements</th>
            <th>Courses</th>
            <th>PORs</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume, index) => (
            <tr key={index}>
              <td>{resume.fileName}</td>
              <td>{resume.education}</td>
              <td>{resume.skills}</td>
              <td>{resume.projects}</td>
              <td>{resume.experience}</td>
              <td>{resume.achievements}</td>
              <td>{resume.courses}</td>
              <td>{resume.PORs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resumes;
