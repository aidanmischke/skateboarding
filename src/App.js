import React from 'react';
import './App.css';
import {Trick} from './Trick';
import {Note} from './Note';
import TrickNotes from './resources/trick-notes.json';

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => {
  let name = r(item).replace('./', '');
  name = r(item).replace('/skateboarding/static/media/', '');
  name = name.replace(/\..+/, '');
  // console.log(name);
  images[name] = r(item);
});
	return images
}

const images = importAll(require.context('./resources', true, /\.(png|jpe?g|gif)$/));

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
          thumb={images["pushing-still"]}
          demo={images["pushing-demo"]}
          notes={<Note note={TrickNotes["Pushing"]}></Note>}
          noteBackground={images["note-2"]}
          onClick={() => this.handleClick()}
        ></Trick>
        <Trick
          name="Rock to Fakie"
          polaroid={images["polaroid-stained-taped-corners"]}
          thumb={images["rock-to-fakie-still"]}
          demo={images["rock-to-fakie-demo"]}
          notes={<Note note={TrickNotes["Rock-to-Fakie"]}></Note>}
          noteBackground={images["note-1"]}
          onClick={() => this.handleClick()}
        ></Trick>
        <Trick
          name="50-50 Grind"
          polaroid={images["polaroid-stained-taped-corners"]}
          thumb={images["50-50-grind-still"]}
          demo={images["50-50-grind-demo"]}
          notes={<Note note={TrickNotes["50-50-Grind"]}></Note>}
          noteBackground={images["note-3"]}
          onClick={() => this.handleClick()}
        ></Trick>
        <Trick
          name="Roll In"
          polaroid={images["polaroid-stained-taped-corners"]}
          thumb={images["roll-in-still"]}
          demo={images["roll-in-demo"]}
          notes={<Note note={TrickNotes["Roll-In"]}></Note>}
          noteBackground={images["note-1"]}
          onClick={() => this.handleClick()}
        ></Trick>
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
  // console.log("TrickConfig: " + TrickConfig.TrickNotes[0].Pushing);

  return (
    <div className="App">
      <div className="container">
          <Wall></Wall>
      </div>
    </div>
  );
}

export default App;