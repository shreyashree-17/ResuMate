const DisplayResumes = ({ resumes, onGet }) => {
  const getall = () => {
    onGet();
  };
  return (
    <div>
      <button onClick={getall}>Get All Resumes</button>
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

export default DisplayResumes;
