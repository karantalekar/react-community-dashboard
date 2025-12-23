import React from "react";

const Card = ({ title, value, color }) => {
  return (
    <div className={`card text-white bg-${color}`}>
      <div className="card-body">
        <h6>{title}</h6>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Card;
