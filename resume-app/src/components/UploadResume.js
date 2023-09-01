// UploadResume.js
import React, { useState } from "react";

const UploadResume = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="upload-div">
      <div className="form-group mb-3 ">
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      </div>
      <button className="uploadbtn" onClick={handleUpload}>Upload Resume</button>
    </div>
  );
};

export default UploadResume;
