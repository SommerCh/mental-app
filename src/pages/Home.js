// Sommer
import Navbar from "../components/Navbar";
import { FaShare } from "react-icons/fa";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import LinChart from "../components/LineChart";
import Header from "../components/Header";
import TrackingRewards from "../components/TrackingRewards";

export default function Home() {
  const myArray = [1, 2, 3];
  const result = myArray.length;

  return (
    <div className="home">
      <Navbar />
      <Header />
      {/* days */}
      <div className="homeinfo">
        <div className="hometop">
          <p className="text">Dage i træk</p>
          <span>
            <FaShare />
          </span>
        </div>
        <div className="homebody">
          <div className="days">
            <span className="line"></span>

            <div className="day">
              <FiCheckCircle />
              <span className="week">man</span>
            </div>
            <div className="day">
              <FiCheckCircle />
              <span className="week">tir</span>
            </div>
            <div className="day">
              <FiCheckCircle />
              <span className="week">ons</span>
            </div>
            <div className="day">
              <FiCircle />
              <span className="week">tor</span>
            </div>
            <div className="day">
              <FiCircle />
              <span className="week">fre</span>
            </div>
            <div className="total">
              <div className="result"> {result}</div>
              <span className="week"></span>
            </div>
          </div>
        </div>

        <div className="homefooter">
          <p>Længste track: {result}</p>
        </div>
      </div>

      {/* seneste track */}
      <div className="homechart">
        <div className="hometop">
          <p className="text">Seneste track</p>
          <span>
            <FaShare />
          </span>
        </div>
        <div className="homebody">
          <LinChart />
        </div>
      </div>

      {/* reward */}
      <div>
        <TrackingRewards />
      </div>
    </div>
  );
}
