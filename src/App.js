import React from 'react';
import './App.css';
import {Trick} from './Trick';
import Polaroid1 from './resources/polaroids/polaroid-stained-taped-corners.png';
import PushingThumb from './resources/PushingThumb.jpg';
import PushingDemo from './resources/PushingDemo.gif';

class Wall extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleClick() {
    return 'hello';
  };

  renderTrick() {
    return (
      <Trick 
        name="Pushing"
        polaroid={Polaroid1}
        thumb={PushingThumb} 
        demo={PushingDemo}
        onClick={() => this.handleClick()}
      ></Trick>
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