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
      <ul>
        {resumes.map((resume, index) => (
          <li key={index}>
            {resume.fileName} {resume.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resumes;
