// DisplayFilteredResumeumes.js
import React, { useState } from "react";

const DisplayFilteredResumeumes = ({ resumes, onFilter }) => {
  const [keyword, setKeyword] = useState("");

  const handleFilter = () => {
    onFilter(keyword);
  };

  return (
    <div className="filter-superdiv">
      <div className="filter-div">
        <input
          className="filter-input"
          type="text"
          placeholder="Enter keyword to filter"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="uploadby" onClick={handleFilter}>
          Filter
        </button>
        <ul>
          {resumes.map((resume, index) => (
            <li key={index}>{resume}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayFilteredResumeumes;
