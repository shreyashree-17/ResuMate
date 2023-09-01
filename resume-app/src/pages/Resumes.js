import { Link } from "react-router-dom";
import resumes from "../assets/data";
import "./css/Resumes.css";
import { Display } from "react-bootstrap-icons";
import DisplayFilteredResumeumes from "../components/DisplayFilteredResumes";

const Resumes = (filteredResumes, onFilter) => {
  return (
    <section className="section">
      <div className="resumes">
        <div className="filter">
          <DisplayFilteredResumeumes
            resumes={filteredResumes}
            onFilter={onFilter}
          />
        </div>
        {resumes.map((resume, index) => {
          return (
            <Link to={`/resumes/${resume.id}`} key={resume.id}>
              <div className="card" key={resume.id}>
                <div className="card-info">
                  <div className="resume-name-and-email">
                    <h5 className="resumes-name">{resume.name}</h5>
                  </div>
                </div>
                <div className="score">{resume.name}</div>
                <div className="score">{resume.name}</div>
                <div className="score">{resume.name}</div>
                <div className="score">{resume.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="clear"></div>
    </section>
  );
};

export default Resumes;
