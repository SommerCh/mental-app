// Sommer
import { NavLink } from "react-router-dom";
import { FiShare2, FiBarChart2, FiUser, FiHome } from "react-icons/fi";
import Andre from "../components/Andre";


export default function Navbar () {
  

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="icon">
              <FiHome />
            </span>
            <span className="title">Forside</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="icon">
              <FiBarChart2 />
            </span>
            <span className="title">Diagram</span>
          </NavLink>
        </li>
        <li>
          <Andre />
        </li>
        <li>
          <NavLink to="/share" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="icon">
              <FiShare2 />
            </span>
            <span className="title">Del</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="icon">
              <FiUser />
            </span>
            <span className="title">Profil</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
