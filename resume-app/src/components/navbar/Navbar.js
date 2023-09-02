import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="nav--logo">ResuMate {user?.name}</div>
      <div className="navigators">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/resumes"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Resumes
        </NavLink>
        <NavLink
          to="/filter"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Filter
        </NavLink>
        <NavLink
          to="/upload"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Upload Resume
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
