import Navbar from "../components/Navbar";
import Person1 from "../assets/img/person.jpg";
import Person2 from "../assets/img/person2.jpg";
import Person3 from "../assets/img/person3.jpg";
import Star from "../assets/img/confetti-4.gif";

import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  FaUsers,
  FaPlus
} from "react-icons/fa";
import Header from "../components/Header";
// Sommer
const Groups = () => {
  const data = [
    {
      name: "Rikke",
      Kost: 4000,
      Humør: 2400,
    },
    {
      name: "Peter",
      Kost: 2000,
      Humør: 9800,
    },
    {
      name: "Mette",
      Kost: 2780,
      Humør: 3908,
    },
  ];

  return (
    <div className="grouppage">
      <Navbar />
      <Header />
      <div className="groupwrapper">
        <div className="groupimgs">
          <img className="groupimg" src={Person1} alt="" />
          <img className="groupimg" src={Person2} alt="" />
          <img className="groupimg" src={Person3} alt="" />
        </div>
        <div className="groupchart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={500} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Humør" fill="#305a75" />
              <Bar dataKey="Kost" fill="#6db4b0" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="goupdiv">
          <p>3/6</p>
          <span>Rikke har fået en præmie</span> <img src={Star} alt="" />
        </div>
        <div className="bars">
          <div className="bar">
            <img className="groupimg" src={Person1} alt="" />
            <div className="personbar1"></div>
            <p>50%</p>
          </div>
          <div className="bar">
            <img className="groupimg" src={Person2} alt="" />
            <div className="personbar2"></div>
            <p>20%</p>
          </div>
          <div className="bar">
            <img className="groupimg" src={Person3} alt="" />
            <div className="personbar3"></div>
            <p>70%</p>
          </div>
        </div>
        <div className="item">
          <div>
            <FaUsers />
            <span>Tilføj gruppe tracks</span>
          </div>
          <FaPlus/>
        </div>
      </div>
    </div>
  );
};
export default Groups;
