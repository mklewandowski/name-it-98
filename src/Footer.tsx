import React from "react";
import construction from "./construction.gif";
import counter from "./counter.gif";

import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <div className="app-footer">
      <img src={construction} alt="construction" />
      © 1998, Lat Mewandowski
      <img src={counter} alt="counter" />
    </div>
  );
};