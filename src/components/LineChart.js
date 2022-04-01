import { CartesianGrid, XAxis, YAxis, AreaChart, ResponsiveContainer, Area } from "recharts";

import Mood1 from "../assets/img/glad.png";
import Mood2 from "../assets/img/ok.png";
import Mood3 from "../assets/img/semi.png";
import Mood4 from "../assets/img/nej.png";
import Mood5 from "../assets/img/ked.png";

export default function LinChart() {
  const data = [
    { day: "Mandag", mood: 4 },
    { day: "Tirsdag", mood: 3 },
    { day: "Onsdag", mood: 2 },
    { day: "Torsdag", mood: 2 },
    { day: "Fredag", mood: 1 },
    { day: "Lørdag", mood: 0.5 },
    { day: "Søndag", mood: 3 },
  ];

  return (
    <div className="linechart">
      <div style={{ width: "105%", height: 270, position: "relative", margin: "0 0 0 -1em" }}>
        <div className="moods">
          <div className="mood">
            <img src={Mood1} alt="mood1" />
          </div>
          <div className="mood">
            <img src={Mood2} alt="mood2" />
          </div>
          <div className="mood">
            <img src={Mood3} alt="mood3" />
          </div>
          <div className="mood">
            <img src={Mood4} alt="mood4" />
          </div>
          <div className="mood">
            <img src={Mood5} alt="mood5" />
          </div>
        </div>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="15%" stopColor="#6db4b0" stopOpacity={1} />
                <stop offset="45%" stopColor="#87ba31" stopOpacity={1} />
                <stop offset="50%" stopColor="#345b74" stopOpacity={1} />
                <stop offset="85%" stopColor="#eb9339" stopOpacity={1} />
                <stop offset="99%" stopColor="#e00c2a" stopOpacity={1} />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6db4b0" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6db4b0" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis stroke="#8884d800" />
            <Area
              type="monotone"
              dataKey="mood"
              stroke="url(#colorUv)"
              fill="url(#colorPv)"
              fillOpacity={1}
              strokeWidth={5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
