import React from "react";

import "./statuscard.css";

const StatusCard = (props) => {
  return (
    <div className="status-card">
      <div className="status-card__icon">
        <span>{props.title}</span>
      </div>
      <div className="status-card__info">
        <h4>{props.count}</h4>
      </div>
    </div>
  );
};

export default StatusCard;
