// Overview.tsx
import React from "react";
import "./Overview.css";
import { Machine } from "../../types";
import "material-icons/iconfont/material-icons.css";

interface Props {
  machines: Machine[];
}

const Overview: React.FC<Props> = ({ machines }) => {
  return (
    <div className="overview">
      <div className="machine-sections ">
        {machines.map((machine) => (
          <div
            key={machine.name}
            className={`machine-section ${machine.state.toLowerCase()}`}
          >
            <span className="material-icons material-icons-custom">
              {" "}
              {machine.icon}
            </span>
            <span className="material-icons material-icons-state">
              {" "}
              {machine.stateIcon}
            </span>
            <h4>{machine.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
