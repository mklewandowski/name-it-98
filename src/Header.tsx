import React from "react";
import baby from "./baby.gif";
import stork from "./stork.gif";

import "./Header.css";

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <img src={stork} alt="stork" />
      <div className="app-title">
        <span className="red">N</span>
        <span className="orange">A</span>
        <span className="yellow">M</span>
        <span className="green">E</span>
        <span className="blue">{` I`}</span>
        <span className="indigo">T</span>
        <span className="red">!</span>
        <span className="orange">!</span>
        <span className="yellow">!</span>
      </div>
      <img src={baby} alt="baby" />
    </header>
  );
};