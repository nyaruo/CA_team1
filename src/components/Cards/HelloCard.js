import React from "react";

import "./hellocard.css";

const HelloCard = (props) => {
  return (
    <div className="hello-card">
      <div className="hello-card__icon">
        <span>Hello, {props.name}!</span>
      </div>
      <div className="hello-card__info">
        <h4>25 December, Wednesday</h4>
      </div>
    </div>
  );
};

export default HelloCard;
