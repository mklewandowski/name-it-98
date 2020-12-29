import React, {useState}  from 'react';
import baby from "./baby.gif";
import stork from "./stork.gif";
import construction from "./construction.gif";
import counter from "./counter.gif";
import email from "./email.gif";
import kramer from "./kramer.gif";
import penguin from "./penguin.gif";
import wrestle from "./wrestle.gif";
import flag from "./flag.gif";

import contact from "./contact.gif";
import guestbook from "./guestbook.gif";
import search from "./search.gif";
import y2k from "./y2k.gif";
import geo from "./geo.gif";

import check from "./check.jpg";
import uncheck from "./uncheck.jpg";

import './App.css';

const sideLinks = [
  {text: "Contact", image: contact, link:"https://www.youtube.com/watch?v=iF07mccxIWM"},
  {text: "Guestbook", image: guestbook, link:"https://www.youtube.com/watch?v=mOYZaiDZ7BM"},
  {text: "Search", image: search, link:"https://www.youtube.com/watch?v=IzqMrhG50q0"},
  {text: "Support", image: y2k, link:"https://www.youtube.com/watch?v=ebdTUxBIaTY"},
  {text: "WWW", image: geo, link:"https://www.youtube.com/watch?v=1npzZu83AfU"},
]

const categories = [
      "Green Bay Packers",
      "Mediocre TV Sitcoms",
      "Regal Sounding Things",
      "Assorted Cheeses",
      "Bees",
      "Vice Presidents of the 1800s",
      "ALF",
      "Movie Villains",
      "Saved by the Bell",
      "Pre-1900 Cleveland Baseball",
      "Soda",
      "Onamonapia",
      "Famous Wisconsinites",
      "Star Trek",
      "Glam Rock"
    ];

const nameParts = [
  ["Aaron","Davonte","Brett","Favre","Aaron-rodgers","Clay","Matthews","Lambeau","Curly","Reggie","Sterling","Bart","Starr","Jordy","Driver","Ahman"],
  ["Urkel","Balki","Uncle Joey","MacGyver","Tripper","Arnold","Willis","Benson","Belvedere","Uncle Jessie","Bartokomous","Punky","Brewster","Kip","Charles","Buddy","Mork","Bull","Keaton"],
  ["Alastair","Jasper","Wigbert","Kalman","Chauncy","Blandford","Barnaby","Balthasar","Benedict","Delaney","Hamilton","Jamison","Julian","Kingsley","Laurent","Maximus","Napoleon","Prescott","Quentin","Birch","Brinley","Bromley","Clifford","Dudley","Durward","Courtland","Hagley","Hawthorne","Hedley","Hendrick","Leland","Marden","Millard","Layton"],  //DONE
  ["Brie","Havarti","Manchego","Cotija","Pecorino","Stilton","Gorgonzola","Cheddar","Fontina"],
  ["Bombus","Impatiens","Ignitus","Jacobsoni","Cryptarum","Affinis","Franklini"],
  ["Thomas","Aaron","George","Elbridge","Daniel","John","Martin","Richard","Millard","Wiliam","Hannibal","Andrew","Henry","Schuyler","Chester","Levi","Adelai","Garret"],  //DONE
  ["Gordon","Shumway","Melmac","Willie","Tanner","Ochmonek","Lucky"], //DONE
  ["Darth","Vader","Kylo","Joker","Sauron","Norman","Bane","Biff","Hans-gruber","HAL","Chucky","Gekko","Freddy","Immortan","Toe-cutter","Thanos","Keyser","Pennywise","Anton","Goldfinger","Voldemort"], //DONE
  ["AC","Zack","Slater","Morris","Screech","Powers","Belding","Max"], //DONE
  ["Patsy","Cupid","Chief","Sport","Ossee","Cy","Cowboy","Otto","Lave","Crazy","Kid","Highball","Ice Box","Chippy","Buck"], //DONE
  ["Pepper","Barqs","Fanta","Surge","Fresca","RC","Big-red","Pibb","Crush","Faygo","Diet-rite","Squirt","Jolt","Orangina","Mug","Schweppe","Slice","Patio","Dewey","Pep","Seven"], //DONE
  ["Woof","Oomph","Argh","Bang","Blorp","Boom","Buzz","Chomp","Clack","Ding","Fizz","Glug","Hoot","Honk","Ping","Plink","Plop","Slush","Slosh","Snarf","Splat","Thud","Whizz","Woof","Zap","Zing","Zoom-zoom"], //DONE
  ["Liberace","Orson","Thonton","Uecker","Ringling","Keefe","Defoe","Farley","Spencer","Welles","Lloyd","Wright","Ueck"], //DONE
  ["Spock","Kirk","Rekar","Nero","Tomalak","Valdore","Jarok","Bones","Scotty","Pavel","Phlox","Telev","Zobral","Mestral","Worf","Rom","Nog","Dukat","Elim","Brunt","Zek","Picard"], //DONE
  ["David","Bowie","Slade","T-Rex","Sweet","Glitter","Ziggy"],
]

function App() {
  const [checks, setCheck] = useState([false, false, false, false, false,
                                       false, false, false, false, false,
                                       false, false, false, false, false]);
  const [name, setName] = useState("______");
  const onCheck = (index: number) => () => {
    const updatedChecks = [...checks];
    const checkVal = checks[index];
    updatedChecks[index] = checkVal ? false : true;
    setCheck(updatedChecks);
  }

  const onClick = () => {
    let parts: string[] = [];
    nameParts.forEach((namePart, index) => {
      if (checks[index]) {
        parts = [...parts, ...namePart];
      }
    });
    const newFirst = parts.length ? parts[getRandomInt(parts.length - 1)] : "Nameless";
    const newMiddle = parts.length ? parts[getRandomInt(parts.length - 1)] : "Baby";
    const newName = `${newFirst} ${newMiddle} Beyer`;
    setName(newName);
  }

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div className="app">
      <header className="app-header">
        <img src={stork} alt="stork" />
        <div className="app-title">
          <span className="red">N</span>
          <span className="orange">A</span>
          <span className="yellow">M</span>
          <span className="green">E</span>
          <span className="blue">{` I`}</span>
          <span className="indigo">T</span>
          <span className="violet">!</span>
          <span className="red">!</span>
          <span className="orange">!</span>
          <span className="yellow">!</span>
          <span className="green">!</span>
          <span className="blue">!</span>
          <span className="indigo">!</span>
        </div>
        <img src={baby} alt="baby" />
      </header>

      <div className="content">
        <div className="sidebar">
          { sideLinks.map((sidelink: any, i: number) =>
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

        <div className="main">
          <div className="chooser-wrapper">
            <div className="chooser">
              Let's name that baby! Choose your interests!  Select as many as you want!
              <div className="choices">
                { categories.map((category: string, i: number) =>
                  <div key={`cat-${i}`} className="choice" onClick={onCheck(i)}>
                    <img className="check" src={checks[i] ? check : uncheck} alt="check" />
                    <label className="choice-label">{category}</label>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button className="name-it" onClick={onClick}>NAME IT</button>

          <div>
            <span className="name-label">Your baby name is</span>
            <span className="name">{name}</span>
          </div>
        </div>
      </div>

      <div className="credits">
        This world wide web page brought to you by:
        <img className="credit" src={flag} alt="flag" />
        <img className="credit" src={wrestle} alt="wrestle" />
        <img className="credit" src={kramer} alt="tv" />
        <img className="credit" src={penguin} alt="penguin" />
        <img className="credit" src={email} alt="email" />
      </div>

      <div className="app-footer">
        <img src={construction} alt="construction" />
        © 1998, Lat Mewandowski
        <img src={counter} alt="counter" />
      </div>
    </div>
  );
}

export default App;
