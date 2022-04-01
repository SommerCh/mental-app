import React from "react";
import { FaShare } from "react-icons/fa";
import medal1 from "../assets/img/medalje.gif";
import medal2 from "../assets/img/star.gif";
import medal3 from "../assets/img/gift.gif";

export default function OtherReward() {
  return (
    <div className="homeinfo">
      <div className="hometop">
        <p className="text">Andre Beløninger</p>
        <span>
          <FaShare />
        </span>
      </div>
      <div className="rewardbody">
        <div className="reward">
          <img src={medal1} alt="" />
        </div>
        <div className="reward">
          <img src={medal2} alt="" />
        </div>
        <div className="reward">
          <img src={medal3} alt="" />
        </div>
      </div>
    </div>
  );
}
