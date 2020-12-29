import React from "react";
import email from "./email.gif";
import kramer from "./kramer.gif";
import penguin from "./penguin.gif";
import wrestle from "./wrestle.gif";
import flag from "./flag.gif";

import "./Credits.css";

export const Credits: React.FC = () => {
  return (
    <div className="credits">
      <div>This world wide web page brought to you by:</div>
      <div>
        <img className="credit" src={flag} alt="flag" />
        <img className="credit" src={wrestle} alt="wrestle" />
        <img className="credit" src={kramer} alt="tv" />
        <img className="credit" src={penguin} alt="penguin" />
        <img className="credit" src={email} alt="email" />
      </div>
    </div>
  );
};