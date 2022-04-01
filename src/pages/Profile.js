import Navbar from "../components/Navbar";
import {
  FiSmartphone,
  FiUserPlus,
  FiCalendar,
  FiUser,
  FiEye,
  FiInstagram,
  FiMail,
} from "react-icons/fi";
// Sommer
export default function Profil() {
  return (
    <div className="profilepage">
      <Navbar />
      <div className="profileimg">
        <FiUserPlus />
      </div>
      <div className="profilelabel">
        <FiUser />
        <span>Sommer C</span>
      </div>
      <div className="profilelabel">
        <FiCalendar />
        <span>25 Maj</span>
      </div>
      <div className="profilelabel">
        <FiSmartphone />
        <span>+45 25488526</span>
      </div>
      <div className="profilelabel">
        <FiInstagram />
        <span>@bruger_insta</span>
      </div>
      <div className="profilelabel">
        <FiMail />
        <span>brugeremail@live.dk</span>
      </div>
      <div className="profilelabel">
        <FiEye />
        <span>Kodeord</span>
      </div>

      <button>Redigere</button>
    </div>
  );
}
