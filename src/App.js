import React from 'react';
import './App.css';
import {Trick} from './Trick';
import {Note} from './Note';

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => {
  let name = r(item).replace('./', '');
  name = r(item).replace('/skateboarding/static/media/', '');
  name = name.replace(/\..+/, '');
  images[name] = r(item);
});
	return images
}

const images = importAll(require.context('./resources', true, /\.(png|jpe?g|gif)$/));

const pushingTrickNotes = [
  "Turn front foot parallel with board.",
  "Swing heelside arm backwards and toeside arm forwards during rear foot push."
];

const rockToFakieTrickNotes = [
  "Lift up front truck over coping.",
  "Click-clack board against coping.",
  "Exaggerate front truck lift up back over coping to avoid hang up.",
  "Looks best done deep with coping touching back truck.",
  "Lean back for extra style."
];

const fiftyFiftyGrindTrickNotes = [
  "Sight where to grind back truck.",
  "Grind rear truck heelside to avoid hang up on exit.",
  "Grind front truck toeside for stability.",
  "Grind inside transition for longer grinds."
];

const rollInTrickNotes = [
  "Manual into transition.",
  "Hop weight off back foot to clear coping and avoid hang ups.",
  "Heelside or toeside is often easier than front on.",
  "Movement helps, but can be done from standstill if all weight is taken off back truck."
];

/*
const TrickNotes = [
  "",
  "",
  "",
  "",
  ""
];
*/

class Wall extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    return 'hello';
  };

  renderTrick() {
    return (
      <div>
        {/* <br /> */}
        <Trick
          name="Pushing"
          polaroid={images["polaroid-stained-taped-corners"]}
          thumb={images["PushingStill"]}
          demo={images["PushingDemo"]}
          notes={<Note note={pushingTrickNotes}></Note>}
          noteBackground={images["note"]}
          noteBackgroundHeight={650}
          onClick={() => this.handleClick()}
        ></Trick>
        <Trick
          name="Rock to Fakie"
          polaroid={images["polaroid-stained-taped-corners"]}
          thumb={images["RockToFakieStill"]}
          demo={images["RockToFakieDemo"]}
          notes={<Note note={rockToFakieTrickNotes}></Note>}
          noteBackground={images["note"]}
          noteBackgroundHeight={1300}
          onClick={() => this.handleClick()}
        ></Trick>
        <Trick
          name="50-50 Grind"
          polaroid={images["polaroid-stained-taped-corners"]}
          thumb={images["50-50GrindBsStill"]}
          demo={images["50-50GrindBsDemo"]}
          notes={<Note note={fiftyFiftyGrindTrickNotes}></Note>}
          noteBackground={images["note"]}
          noteBackgroundHeight={1000}
          onClick={() => this.handleClick()}
        ></Trick>
        <Trick
          name="Roll In"
          polaroid={images["polaroid-stained-taped-corners"]}
          thumb={images["RollInStill"]}
          demo={images["RollInDemo"]}
          notes={<Note note={rollInTrickNotes}></Note>}
          noteBackground={images["note"]}
          noteBackgroundHeight={1300}
          onClick={() => this.handleClick()}
        ></Trick>

{/* 
<br />
<br />
<br />
<br />
*/}

      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderTrick()}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="container">
          <Wall></Wall>
      </div>
    </div>
  );
}

export default App;