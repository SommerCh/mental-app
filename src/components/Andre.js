import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiCheck, FiUsers, FiStar, FiPlus } from "react-icons/fi";

export default function Andre() {
  const [overlay, setOverlay] = useState(false);

  const LoginOverlay = ({ removeOverlay }) => {
    return (
      <div className="overlay_background" onClick={() => removeOverlay()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            removeOverlay();
          }}
        >
          <div id="andre">
            <li>
              <NavLink to="/track" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="icon">
                  <FiCheck />
                </span>
                <span className="andre-title">Track</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/groups" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="icon">
                  <FiUsers />
                </span>
                <span className="andre-title">Grupper</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reward" className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="icon">
                  <FiStar />
                </span>
                <span className="andre-title">Priser</span>
              </NavLink>
            </li>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      <div className={overlay ? "overlay_shown" : "overlay_hidden"}>
        <LoginOverlay removeOverlay={() => setOverlay(false)} />
      </div>
      <div className="icon plus" onClick={() => setOverlay(true)}>
        <FiPlus />
      </div>
    </div>
  );
}
