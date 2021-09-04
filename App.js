import React, { Component } from 'react';
import DivOne from './DivOne';
import './App.css';



export class App extends Component {
  state = {
    name: 'tardis',
  };

  render() {
    return (
      <div className='App'>
      <DivOne dataFromParent={this.state} change={this.changeIt} />
      </div>
    );
  }
}

export default App;
