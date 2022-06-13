import React from "react";

const Gauges = ({ gauge }) => {
  return (
    <li className="gauge-container" style={{ "--width": gauge.level + "%" }}>
      <h3>{gauge.skill}</h3>
      <p>{gauge.level}%</p>
    </li>
  );
};

export default Gauges;
