import React, {useState}  from 'react';
import money from "./money.gif";
import computer from "./computer.gif";
import homie from "./homie.gif";
import arrowright from "./arrow-right.gif";
import arrowleft from "./arrow-left.gif";
import check from "./check.jpg";
import uncheck from "./uncheck.jpg";

import './App.css';
import { Header } from './Header';
import { Links } from './Links';
import { Footer } from './Footer';
import { Credits } from './Credits';

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
      "Glam Rock",
      "'80s Toys",
      "Small Towns in the Midwest",
      "Candy",
      "Pro Wrestling"
    ];

const nameParts = [
  ["Aaron","Davonte","Brett","Favre","Aaron-rodgers","Clay","Matthews","Lambeau","Curly","Reggie","Sterling","Bart","Starr","Jordy","Driver","Ahman",
   "Equanimeous","Marquez","Montravius","Randall","Geronimo","Ha Ha","Kentrell","Za'Darius","Jaire","Raven","Kingsley"], //DONE
  ["Urkel","Balki","Uncle Joey","MacGyver","Tripper","Arnold","Willis","Benson","Belvedere","Uncle Jessie","Bartokomous","Punky","Brewster","Kip",
   "Charles","Buddy","Mork","Bull","Keaton"], //DONE
  ["Alastair","Jasper","Wigbert","Kalman","Chauncy","Blandford","Barnaby","Balthasar","Benedict","Delaney","Hamilton","Jamison","Julian","Kingsley",
   "Laurent","Maximus","Napoleon","Prescott","Quentin","Birch","Brinley","Bromley","Clifford","Dudley","Durward","Courtland","Hagley","Hawthorne",
   "Hedley","Hendrick","Leland","Marden","Millard","Layton","Pigbert","Figbert","Buckley","Brock","Burgess","Beardsley"],  //DONE
  ["Brie","Havarti","Manchego","Cotija","Pecorino","Stilton","Gorgonzola","Cheddar","Fontina","Ackawi","Camembert","Emmental","Edam","Jarlsberg",
   "Reblochon","Taleggio","Halloumi","Roquefort","Baladi","Barilotto","Baron Bigod","Barberey","Comté","Burrata","Scamorza","Mascarpone",
    "Gorgonzola","Provolone"], //DONE
  ["Bombus","Impatiens","Ignitus","Jacobsoni","Cryptarum","Affinis","Franklini","Alpinus","Polaris","Neoboreus","Angustus","Grahami","Nobilis",
    "Confusus","Kashmirensis","Hyperboreus","Natvigi"],
  ["Thomas","Aaron","George","Elbridge","Daniel","John","Martin","Richard","Millard","William","Hannibal","Andrew","Henry","Schuyler","Chester",
   "Levi","Adelai","Garret"],  //DONE
  ["Gordon","Shumway","Melmac","Willie","Tanner","Ochmonek","Lucky"], //DONE
  ["Darth","Vader","Kylo","Joker","Sauron","Norman","Bane","Biff","Hans-gruber","HAL","Chucky","Gekko","Freddy","Immortan","Toe-cutter","Thanos",
   "Keyser","Pennywise","Anton","Goldfinger","Voldemort"], //DONE
  ["AC","Zack","Slater","Morris","Screech","Powers","Belding","Max"], //DONE
  ["Patsy","Cupid","Chief","Sport","Ossee","Cy","Cowboy","Otto","Lave","Crazy","Kid","Highball","Ice Box","Chippy","Buck"], //DONE
  ["Pepper","Barqs","Fanta","Surge","Fresca","RC","Big-red","Pibb","Crush","Faygo","Diet-rite","Squirt","Jolt","Orangina","Mug","Schweppe","Slice",
   "Patio","Dewey","Pep","Seven"], //DONE
  ["Woof","Oomph","Argh","Bang","Blorp","Boom","Buzz","Chomp","Clack","Ding","Fizz","Glug","Hoot","Honk","Ping","Plink","Plop","Slush","Slosh",
   "Snarf","Splat","Thud","Whizz","Woof","Zap","Zing","Zoom-zoom","Bash","Bark","Bam-bam","Beep","Brrring","Boing","Blurt"], //DONE
  ["Liberace","Orson","Thonton","Uecker","Ringling","Keefe","Defoe","Farley","Spencer","Welles","Lloyd","Wright","Ueck"], //DONE
  ["Spock","Kirk","Rekar","Nero","Tomalak","Valdore","Jarok","Bones","Scotty","Pavel","Phlox","Telev","Zobral","Mestral","Worf","Rom","Nog","Dukat",
   "Elim","Brunt","Zek","Picard"], //DONE
  ["David","Bowie","Slade","T-Rex","Sweet","Glitter","Ziggy","Iggy","Pop","Quatro","Roxy","Ferry","Eno","Dart","Cooper","Roller","Arrow","Mott",
   "Doll","Spark"], //DONE
  ["Huckleberry","Pieman","Bow","Strong Heart","Starlite","Red Butler","Buddy Blue","Murky","Lurky","Glitterbot","Funshine","Synergy","Clash"],
  ["Troy","Geneva","Dells","Baraboo","Wausau","Minocqua","Horeb","Ash","Wauwa","Harbor","Ripon","Beloi","Mequon","Glarus","Elkhart","Moon","Wien",
   "Rozell","Cambria","Brillion","Holland","Sherwood"],
  ["Mars","Milky Way","Butterfinger","Smartie","Bit-O","Goo Goo","Gummy","Charleston","Chuckles","Milk-dud","Dud","Skittle","Gob","Gobstopper",
   "Kit","Kat","Twix"],
  ["Hulk","Warrior","Braun","Roman","Reigns","Bray","Wyatt","Kofi","Miz","Slapjack","Cactus","Dino","T-Bar","Shelton","Finn","Balor","Taker"]
]

function App() {
  const [checks, setCheck] = useState([false, false, false, false, false,
                                       false, false, false, false, false,
                                       false, false, false, false, false,
                                       false, false, false, false]);
  const [name, setName] = useState("______");
  const [cash, setCash] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [needBreak, setNeedBreak] = useState(false);
  const [clicks, setClicks] = useState(0);
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
    setClicks(clicks + 1);
    setNeedBreak(clicks % 13 === 0 && clicks > 0);

    console.log(parts.length);
    const newFirst = parts.length ? parts[getRandomInt(parts.length - 1)] : "Nameless";
    const newMiddle = parts.length ? parts[getRandomInt(parts.length - 1)] : "Baby";
    const newName = `${newFirst} ${newMiddle} Beyer`;
    setCash(newFirst.charAt(0) === "B" && newMiddle.charAt(0) === "B")
    setRepeat(newFirst === newMiddle);
    setName(newName);
  }

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div className="app">
      <Header />
      <Links />

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

      <div className="horizontal-container">
        <img src={arrowleft} className="arrow" alt="arrow" />
        <button className="name-it" onClick={onClick}>NAME IT</button>
        <img src={arrowright} className="arrow"  alt="arrow" />
      </div>

      <div className="name-container">
        <span className="name-label">Your baby name is</span>
        <span className="name">{name}</span>
      </div>

      { repeat &&
        <div className="horizontal-container">
          <img src={homie} alt="homie" />
          A bit repetitive?
          <img src={homie} alt="homie" />
        </div>
      }

      { cash && !repeat &&
        <div className="horizontal-container">
          <img src={money} alt="money" />
          Nice alliteration!
          <img src={money} alt="money" />
        </div>
      }

      { needBreak && !repeat && !cash &&
        <div className="horizontal-container">
          <img src={computer} alt="computer" />
          Addictive! Don't stop now!
          <img src={computer} alt="computer" />
        </div>
      }

      <Credits />
      <Footer />
    </div>
  );
}

export default App;
