import { FaMugHot, FaUtensils, FaGrin, FaFutbol, FaBed, FaUsers } from "react-icons/fa";

export default function PickTrack({ handleChange }) {
  return (
    <div className="page">
      <form onChange={handleChange} className="tracks">
        <label className="check">
          <p> Humør</p>
          <FaGrin />
          <input type="checkbox" value="Humør " />
          <span></span>
        </label>
        <label className="check">
          Søvn
          <FaBed />
          <input type="checkbox" value="Søvn " />
          <span></span>
        </label>
        <label className="check">
          Træning
          <FaFutbol />
          <input type="checkbox" value="Træning " />
          <span></span>
        </label>
        <label className="check">
          Kost
          <FaUtensils />
          <input type="checkbox" value="Kost " />
          <span></span>
        </label>
        <label className="check">
          Socialt
          <FaMugHot />
          <input type="checkbox" value=" Social aktivitet " />
          <span></span>
        </label>
        <label className="check">
          Grupper
          <FaUsers />
          <input type="checkbox" value="Grupper " />
          <span></span>
        </label>
      </form>
    </div>
  );
}
