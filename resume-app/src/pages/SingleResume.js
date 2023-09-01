import { Link, useParams } from 'react-router-dom';
import resume from '../assets/dataSC/dataSC';
import './css/SingleResume.css';

import DetailAside from '../components/detailAside/DetailAside';
// import DetailCurriculum from '../../components/detailCurriculum/detailCurriculum';
// import DetailDescription from '../../components/detailDescription/DetailDescription';
// import DetailHeader from '../../components/detailHeader/DetailHeader';
// import DetailInstructor from '../../components/detailInstructor/DetailInstructor';
// import DetailReviews from '../../components/detailReviews/DetailReviews';
// import DetailTabs from '../../components/detailTabs/DetailTabs';

const {
  info,
  details,
  chapters,
  description,
  creator,
  coments,
  rating,
} = resume;

const SingleResume = () => {
  return (
    <section className='section product'>
      <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 order-lg-last ">
              <DetailAside {
                ...details} />
            </div>
            <div className="col-lg-8">
              <div className="resume-main">
                <div className="main-tabs my-4">
                  {/* <DetailTabs /> */}
                </div>
                <div className="main-tab-content box">
                  <div className="tab-content" id="nav-tabContent">
          
                    {/* <DetailCurriculum chapters={chapters} />
      
            
                    <DetailDescription {...description} />
        
          
                    <DetailInstructor {...creator} />
      
    
                    <DetailReviews coments={coments} rating={rating} /> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <img src={image} alt={name} />
      <h5>{name}</h5> */}
      <Link to='/resumes' className='btn'>Back to Resumes</Link>
      <div className='clear'></div>
      <div className='clear'></div>
    </section>
   
  );
};

export default SingleResume;
