import React from 'react';
import baby from "./baby.gif";
import stork from "./stork.gif";
import construction from "./construction.gif";
import counter from "./counter.gif";
import email from "./email.gif";
import kramer from "./kramer.gif";
import penguin from "./penguin.gif";
import wrestle from "./wrestle.gif";
import flag from "./flag.gif";
import './App.css';

function App() {
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
        <div className="chooser">
          Let's name that baby! Choose your interests!  Select as many as you want!
          <div className="choices">
            <div className="choice">
              <input type="checkbox" id="choice1" name="choice1" value="choice1"/>
              <label>Green Bay Packers</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice2" name="choice2" value="choice2"/>
              <label>Mediocre TV Sitcoms</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice4" name="choice4" value="choice4"/>
              <label>Regal Sounding Things</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice5" name="choice5" value="choice5"/>
              <label>Assorted Cheeses</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice6" name="choice6" value="choice6"/>
              <label>Bees</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Vice Presidents of the 1800s</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>ALF</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Movie Villains</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Saved by the Bell</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Pre-1900 Cleveland Baseball</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Soda</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Onamonapia</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Famous Wisconsinites</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Star Trek</label>
            </div>
            <div className="choice">
              <input type="checkbox" id="choice3" name="choice3" value="choice3"/>
              <label>Glam Rock</label>
            </div>
          </div>
        </div>


        <button className="name-it">NAME IT</button>
        <div className="name">Your baby name is __________</div>
      </div>

      <div className="credits">
        This webpage brought to you by:
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
