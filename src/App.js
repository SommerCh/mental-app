import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Reward from "./pages/Reward";
import Share from "./pages/Share";
import Track from "./pages/Track";
import Groups from "./pages/Groups";
import MultiStepPage from "./pages/MultiStepPage";
import SignInPage from "./pages/SignInPage";

// Sommer
function App() {

  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/track" element={<Track />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/share" element={<Share />} />
        <Route path="/track" element={<Track />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/" element={<MultiStepPage />} />
        <Route path="/sign-in" element={<SignInPage />} />

        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
    </main>
  );
}

export default App;
