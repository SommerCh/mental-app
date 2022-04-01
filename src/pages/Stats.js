import Header from "../components/Header";
import LinChart from "../components/LineChart";
import Navbar from "../components/Navbar";
import { BarChart, Bar, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

// Sommer
export default function Stats() {
  const data = [
    { day: "Mandag", mood: 4, fill: "#6db4b0" },
    { day: "Tirsdag", mood: 3, fill: "#87ba31" },
    { day: "Onsdag", mood: 2, fill: "#345b74" },
    { day: "Torsdag", mood: 2, fill: "#eb9339" },
    { day: "Fredag", mood: 1, fill: "#e00c2a" },
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <div className="stats">
        <div className="homechart">
          <LinChart />
        </div>

        <div className="homechart">
          <div style={{ width: "100%", height: 270 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="mood" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="homechart">
          <div style={{ width: "100%", height: 270 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar minAngle={15} background clockWise dataKey="mood" />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
