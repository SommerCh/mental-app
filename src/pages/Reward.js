import Navbar from "../components/Navbar";
// import Star from "../components/Star";
import Header from "../components/Header";
import TrackingRewards from "../components/TrackingRewards";
import OtherReward from "../components/OtherReward";

// Sommer
export default function Reward() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="rewardpage">
        <TrackingRewards />
        <OtherReward />
      </div>
    </div>
  );
}
