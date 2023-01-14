import React from 'react';
import './App.css';
import {Trick} from './Trick';

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { 
  let name = r(item).replace('./', '');
  name = r(item).replace('/skateboarding/static/media/', '');
  name = name.replace(/\..+/, '');
  console.log(name);
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
        <Trick 
          name="Pushing"
          polaroid={images["polaroid-stained-taped-corners"]}
          thumb={images["PushingThumb"]} 
          demo={images["PushingDemo"]}
          onClick={() => this.handleClick()}
        ></Trick>

        <Trick 
          name="Rock to Fakie"
          polaroid={images["polaroid-stained-taped-corners"]}
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