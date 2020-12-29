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

import './App.css';

const nameParts = [
  ["Aaron","Davonte","Brett","Favre","Aaron-rodgers","Clay","Matthews","Lambeau","Curly"],
  ["Urkel","Balky","Theo","MacGyver","Tripper","Arnold","Willis","Benson","Belvedere"],
  ["Alastair","Jasper","Wigbert","Kalman","Chauncy","Blandford","Barnaby","Balthasar","Benedict"],
  ["Brie","Havarti","Manchego","Cotija","Pecorino","Stilton","Gorgonzola","Cheddar","Fontina"],
  ["Bombus","Impatiens","Ignitus","Jacobsoni","Cryptarum","Affinis","Franklini"],
  ["Thomas","Aaron","George","Elbridge","Daniel","John","Martin","Richard","Millard","Wiliam","Hannibal","Andrew","Henry","Schuyler","Chester","Levi","Adelai","Garret"],
  ["Gordon","Shumway","Melmac","Willie","Tanner"],
  ["Darth","Vader","Kylo","Joker","Sauron","Norman","Bane"],
  ["AC","Zack","Slater","Morris","Screech","Powers"],
  ["Patsy","Cupid","Chief","Sport","Ossee","Cy","Cowboy"],
  ["Pepper","Barqs","Fanta","Surge","Fresca","RC"],
  ["Woof","Oomph","Argh","Bang","Blorp","Boom","Buzz"],
  ["Liberace","Orson","Thonton","Uecker","Ringling","Keefe","Defoe"],
  ["Spock","Kirk","Rekar","Nero","Tomalak","Valdore","Jarok"],
  ["David","Bowie","Slade","T-Rex","Sweet","Glitter","Ziggy"],
]

function App() {
  const [checks, setCheck] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [name, setName] = useState("______");
  const onCheck = (evt: any) => {
    const updatedChecks = [...checks];
    const checkVal = checks[evt.target.id];
    updatedChecks[evt.target.id] = checkVal > 0 ? 0 : 1;
    setCheck(updatedChecks);
  }

  const onClick = () => {
    let parts: string[] = [];
    nameParts.forEach((namePart, index) => {
      if (checks[index] === 1) {
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
        <img src={stork}/>
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
        <img src={baby}/>
      </header>

      <div className="content">
        <div className="sidebar">
          <a href="https://www.youtube.com/watch?v=iF07mccxIWM">
            <div className="box">Contact<img className="linky" src={contact}/></div>
          </a>
          <a href="https://www.youtube.com/watch?v=mOYZaiDZ7BM">
            <div className="box">Guestbook<img className="linky" src={guestbook}/></div>
          </a>
          <a href="https://www.youtube.com/watch?v=IzqMrhG50q0">
            <div className="box">Search<img className="linky" src={search}/></div>
          </a>
          <a href="https://www.youtube.com/watch?v=ebdTUxBIaTY">
            <div className="box">Tech Support<img className="linky" src={y2k}/></div>
          </a>
          <a href="https://www.youtube.com/watch?v=1npzZu83AfU">
            <div className="box">Hosting<img className="linky" src={geo}/></div>
          </a>
        </div>

        <div className="main">
          <div className="chooser">
            Let's name that baby! Choose your interests!  Select as many as you want!
            <div className="choices">
              <div className="choice">
                <input type="checkbox" id="0" name="0" value="0" onChange={onCheck}/>
                <label>Green Bay Packers</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="1" name="1" value="1" onChange={onCheck}/>
                <label>Mediocre TV Sitcoms</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="2" name="2" value="2" onChange={onCheck}/>
                <label>Regal Sounding Things</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="3" name="3" value="3" onChange={onCheck}/>
                <label>Assorted Cheeses</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="4" name="4" value="4" onChange={onCheck}/>
                <label>Bees</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="5" name="5" value="5" onChange={onCheck}/>
                <label>Vice Presidents of the 1800s</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="6" name="6" value="6" onChange={onCheck}/>
                <label>ALF</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="7" name="7" value="7" onChange={onCheck}/>
                <label>Movie Villains</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="8" name="8" value="8" onChange={onCheck}/>
                <label>Saved by the Bell</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="9" name="9" value="9" onChange={onCheck}/>
                <label>Pre-1900 Cleveland Baseball</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="10" name="10" value="10" onChange={onCheck}/>
                <label>Soda</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="11" name="11" value="11" onChange={onCheck}/>
                <label>Onamonapia</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="12" name="12" value="12" onChange={onCheck}/>
                <label>Famous Wisconsinites</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="13" name="13" value="13" onChange={onCheck}/>
                <label>Star Trek</label>
              </div>
              <div className="choice">
                <input type="checkbox" id="14" name="14" value="14" onChange={onCheck}/>
                <label>Glam Rock</label>
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
        <img className="credit" src={flag}/>
        <img className="credit" src={wrestle}/>
        <img className="credit" src={kramer}/>
        <img className="credit" src={penguin}/>
        <img className="credit" src={email}/>
      </div>

      <div className="app-footer">
        <img src={construction}/>
        © 1998, Lat Mewandowski
        <img src={counter}/>
      </div>
    </div>
  );
}

export default App;
