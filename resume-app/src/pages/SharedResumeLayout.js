import { Outlet } from 'react-router-dom';
import './css/SharedResumeLayout.css'
const Home = () => {
  return (
    <>
      <h2 className='courses-heading text-center fs-4 mb-5 fw-bold'>Resumes</h2>
      <Outlet />
    </>
  );
};
export default Home;
