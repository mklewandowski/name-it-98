import React from 'react';
import baby from "./baby.gif";
import stork from "./stork.gif";
import construction from "./construction.gif";
import counter from "./counter.gif";
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
          <div className="choice">
            <input type="checkbox" id="choice1" name="choice1" value="choice1"/>
            <label>Green Bay Packers</label>
          </div>
          <div className="choice">
            <input type="checkbox" id="choice2" name="choice2" value="choice2"/>
            <label>Good-ish TV Sitcoms</label>
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
        </div>


        <button className="name-it">NAME IT</button>
        <div className="name">Your baby name is __________</div>
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
