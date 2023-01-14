import React from 'react';
import './App.css';
import {Trick} from './Trick';
import Polaroid1 from './resources/polaroids/polaroid-stained-taped-corners.png';

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { 
  // images[item.replace('./', '')] = r(item); 
  
  let name = r(item).replace('./', ''); 
  name = r(item).replace('/skateboarding/static/media/', '');
  name = name.replace(/\..+/, '');
  console.log(name);

  images[name] = r(item); 
});
	return images
}

const images = importAll(require.context('./resources/tricks', false, /\.(png|jpe?g|gif)$/));

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
        <Trick 
          name="Pushing"
          polaroid={Polaroid1}
          thumb={images["PushingThumb"]} 
          demo={images["PushingDemo"]}
          onClick={() => this.handleClick()}
        ></Trick>

        <Trick 
          name="Rock to Fakie"
          polaroid={Polaroid1}
          thumb={images["RockToFakieThumb"]} 
          demo={images["RockToFakieDemo"]}
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
  return (
    <div className="App">
      <div className="container">
          <Wall></Wall>
      </div>
    </div>
  );
}

export default App;