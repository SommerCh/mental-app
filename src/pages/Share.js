import Navbar from "../components/Navbar";
import {
  FaBrain,
  FaCocktail,
  FaGuitar,
  FaMugHot,
  FaPhoneAlt,
  FaUtensils,
  FaYinYang,
  FaRegHeart,
  FaShare,
  FaUsers,
  FaRegChartBar,
  FaCalendarAlt,
  FaRegThumbsUp,
} from "react-icons/fa";

// Sommer
export default function Shara() {
  return (
    <div>
      <Navbar />

      {/* <Header/> */}
      <div className="trackwrapper">
        <div className="goels">
          <h3>Opret nye mål</h3>
          <p>Trænger du til nye udfordringer?</p>
          <FaBrain />
          <button>Opret</button>
        </div>

        <div className="item">
          <div>
            <FaCocktail /> <FaPhoneAlt /> <FaYinYang /> <FaMugHot /> <FaRegHeart /> <FaGuitar />{" "}
            <FaUtensils />
            <span>Dine tracks</span>
          </div>
          <FaShare />
        </div>
        <div className="item">
          <div>
            <FaUsers />
            <span>Gruppe aktiviter</span>
          </div>
          <FaShare />
        </div>
        <div className="item">
          <div>
            <FaRegChartBar />
            <span>Del dine statistikker</span>
          </div>
          <FaShare />
        </div>
        <div className="item">
          <div>
            <FaCalendarAlt />
            <span>Del dine Aftaler</span>
          </div>
          <FaShare />
        </div>
        <div className="item">
          <div>
            <FaRegThumbsUp />
            <span>Del dine mål</span>
          </div>
          <FaShare />
        </div>
      </div>
    </div>
  );
}
