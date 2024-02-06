// Navigation.tsx
import React from "react";
import logo from "../../images/Logo_Bühler_AG.svg.png"; 
import { Machine } from '../../types'

import "./Header.css";


interface Props {
  machines: Machine[];
}

const Navigation: React.FC<Props> = ({ machines }) => {
  return (
    <div className="navigation">
      <header>
        <div className="img-container">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className="text-container">
          <h6 className="text"><span className="material-icons material-nav-custom-icon">schedule </span> 01.24.2020 12:44</h6>
          <h6 className="text"><span className="material-icons material-nav-custom-icon">account_circle </span>Operator</h6>
        </div>
      </header>
      <ul>
        {machines.map((machine) => (
          <li key={machine.name}   className={`navigation-section ${machine.state.toLowerCase()}`}>
            <span>{machine.name}</span>
            <span className="material-icons material-icons-custom-state">
              {" "}
              {machine.stateIcon}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
