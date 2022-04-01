// Sommer
import React from "react";
import { Link} from "react-router-dom";
import Yes from '../assets/img/confetti.gif'

export default function FormReward({ name, theme, selectedItems }) {
  return (
    <div className="page formreward">
      <p>Godt klaret {name}.</p>
      <p>Du har fået din første belønning
      </p>

      <p>Du har valgt temaet: {theme}</p>
      <p>Og tracker nu: {selectedItems} </p>
      <img className='yes' src={Yes} alt=""/>

      <button className="afslut">
        <Link to="/home">Videre</Link>
      </button>
    </div>
  );
}

