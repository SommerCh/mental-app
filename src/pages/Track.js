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
  FaRegCheckCircle,
  FaPlus
} from "react-icons/fa";

// Sommer
export default function Track() {
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
            <FaCocktail />
            <span>Sociale aktivitet</span>
          </div>
          <FaRegCheckCircle/>
        </div>
        <div className="item">
          <div>
            <FaPhoneAlt />
            <span>Kontakt</span>
          </div>
          <FaPlus/>
        </div>
        <div className="item">
          <div>
            <FaYinYang />
            <span>Mindfullness</span>
          </div>
          <FaPlus/>
        </div>
        <div className="item">
          <div>
            <FaMugHot />
            <span>Aftaler</span>
          </div>
          <FaPlus/>
        </div>
        <div className="item">
          <div>
            <FaRegHeart />
            <span>Taknemmelighed</span>
          </div>
          <FaPlus/>
        </div>
        <div className="item">
          <div>
            <FaGuitar />
            <span>Musik</span>
          </div>
          <FaPlus/>
        </div>
        <div className="item">
          <div>
            <FaUtensils />
            <span>Kost</span>
          </div>
          <FaRegCheckCircle/>
        </div>
      </div>
    </div>
  );
}
