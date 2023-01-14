import React from 'react';
import './App.css';
import {Trick} from './Trick';
import Polaroid1 from './resources/polaroids/polaroid-stained-taped-corners.png';
import PushingThumb from './resources/tricks/PushingThumb.jpg';
import PushingDemo from './resources/tricks/PushingDemo.gif';
import RockToFakieThumb from './resources/tricks/RockToFakieThumb.jpg';
import RockToFakieDemo from './resources/tricks/RockToFakieDemo.gif';

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
          thumb={PushingThumb} 
          demo={PushingDemo}
          onClick={() => this.handleClick()}
        ></Trick>

        <Trick 
          name="Rock to Fakie"
          polaroid={Polaroid1}
          thumb={RockToFakieThumb} 
          demo={RockToFakieDemo}
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