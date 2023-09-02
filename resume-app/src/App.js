// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";
import DisplayResumes from "./DisplayResumes";
import SharedResumeLayout from "./pages/SharedResumeLayout";
import Resumes from "./pages/Resumes";
import axios from "axios"; // Import Axios
import Upload from "./pages/Upload";
import SingleResume from "./pages/SingleResume";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [resumes, setResumes] = useState([]); // Define resumes state
  const [filteredResumes, setFilteredResumes] = useState([]); // Define filteredResumes state
  const [user, setUser] = useState(null);

  // const handleUpload = () => {
  //   setResumes(["resume1", "resume2", "resume3"]); // Replace with your actual resume data

  // }

  const handleUpload = (file) => {
    console.log("Uploading file:", file.name); // Debug: Log the file name

    const formData = new FormData();
    formData.append("resume", file);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        // Assuming the backend sends back an array of extracted texts
        const extractedTexts = response.data;
        console.log("Received extracted texts:", extractedTexts); // Debug: Log the extracted texts
        setResumes(extractedTexts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFilter = (keyword) => {
    const formData = new FormData();
    formData.append("filterword", keyword);

    axios
      .post("http://localhost:5000/filter", formData)
      .then((response) => {
        const filteredTexts = response.data;
        setFilteredResumes(filteredTexts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getall = () => {
    axios
      .get("http://localhost:5000/get")
      .then((response) => {
        const resumedata = response.data;
        setResumes(resumedata);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout user={user} />}>
          <Route index element={<Home />} />
          <Route
            path="resumes"
            index
            element={<DisplayResumes resumes={resumes} onGet={getall} />}
          />
          <Route
            path="filter"
            index
            element={
              <Resumes resumes={filteredResumes} onFilter={handleFilter} />
            }
          />
          <Route
            path="upload"
            element={
              <Upload
                handleUpload={handleUpload}
                resumes={resumes}
                filteredResumes={filteredResumes}
                handleFilter={handleFilter}
              />
            }
          />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route path="signup" element={<SignUp setUser={setUser}></SignUp>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
