import React from "react";
import "./infoCard.css";
import SSandTime from '../../assets/images/SingleSandTime.svg';

const InfoCard = ({text, checked, onChange }) => {
  return (
    <div className="card">
      <img src={SSandTime} alt="Card image" className="card-image" />
      <div className="card-text">Reduce failed <span className="break-line">payments</span></div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="card-checkbox"
      />
    </div>
  );
};

export default InfoCard;
