import React from "react";
import contact from "./contact.gif";
import guestbook from "./guestbook.gif";
import search from "./search.gif";
import y2k from "./y2k.gif";
import geo from "./geo.gif";

import "./Links.css";

const links = [
  {text: "Contact", image: contact, link:"https://www.youtube.com/watch?v=iF07mccxIWM"},
  {text: "Guestbook", image: guestbook, link:"https://www.youtube.com/watch?v=mOYZaiDZ7BM"},
  {text: "Search", image: search, link:"https://www.youtube.com/watch?v=IzqMrhG50q0"},
  {text: "Support", image: y2k, link:"https://www.youtube.com/watch?v=ebdTUxBIaTY"},
  {text: "WWW", image: geo, link:"https://www.youtube.com/watch?v=1npzZu83AfU"},
]

export const Links: React.FC = () => {
  return (
    <div className="links">
      { links.map((sidelink: any, i: number) =>
        <a href={sidelink.link} key={`link-${i}`}>
          <div className="box-wrapper">
            <div className="box">
              {sidelink.text}
              <img className="linky" src={sidelink.image} alt={sidelink.text} />
            </div>
          </div>
        </a>
      )}
    </div>
  );
};