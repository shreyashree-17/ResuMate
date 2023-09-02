const DisplayResumes = ({ resumes, onGet }) => {
  const getall = () => {
    onGet();
  };

  return (
    <div>
      <button onClick={getall}>Get All Resumes</button>
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

export default DisplayResumes;
