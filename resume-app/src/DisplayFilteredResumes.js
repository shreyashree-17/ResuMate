// DisplayFilteredResumeumes.js
import React, { useState } from "react";

const DisplayFilteredResumeumes = ({ resumes, onFilter }) => {
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
          <li key={index}>{resume}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayFilteredResumeumes;
