import { Link } from 'react-router-dom';
import resumes from '../assets/data'
import './css/Resumes.css'
import { Display } from 'react-bootstrap-icons';
import DisplayFilteredResumeumes from '../components/DisplayFilteredResumes';


const Resumes = (filteredResumes, onFilter) => {
  return (
    <section className='section'>
       <div className='resumes'>  
       <div className='filter'>
        <DisplayFilteredResumeumes resumes={filteredResumes} onFilter={onFilter}/>
      </div>  
        {resumes.map((resume) => {
            const { image, name } = resume;
            
            return (
              <Link to={`/resumes/${resume.id}`} key={resume.id}>
              <div className='card' key={resume.id}>
                <div className='card-info'>
                <img src={image} alt={name} className='profile-image' />
                  <div className='resume-name-and-email'>
                      <h5 className='resumes-name'>{resume.name}</h5>
                      <p className='email'>{resume.email}</p>
                    </div>
                  </div>
                  <div className='score'>
                    blaah
                  </div><div className='score'>
                    blaah
                  </div><div className='score'>
                    blaah
                  </div>
                  <div className='score'>
                    hi
                  </div>
              </div>
              </Link>
            );
          })}
        </div>
      <div className='clear'></div>
    </section>
  );
};

export default Resumes;
