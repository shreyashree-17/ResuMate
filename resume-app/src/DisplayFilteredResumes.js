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
        {resumes.map(([key, value]) => (
          <li key={key}>
            {value.fileName} {value.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayFilteredResumeumes;
