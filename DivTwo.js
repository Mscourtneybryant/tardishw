import React, { Component } from 'react';
import DivThree from './DivThree';


 class DivTwo extends Component {
  render() {
    return (
      <div>
        <DivThree text={this.props.text} />

        <DivThree text={this.props.text} />
      </div>
    );
  }
}

export default DivTwo;