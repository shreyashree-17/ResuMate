import { Link, Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from '../components/footer/footer';
const Home = (user) => {
  return (
    <>
      <Navbar user={user}/>
      <Footer/>
      <Outlet />
    </>
  );
};
export default Home;
