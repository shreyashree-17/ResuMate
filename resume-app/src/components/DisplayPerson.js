// DisplayFilteredResumeumes.js
import React, { useState } from "react";

const DisplayResumeumes = ({ resumes }) => {
  return (
    <div>
      <ul>
        {resumes.map((resume, index) => (
          <li key={index}>{resume}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayResumeumes;
