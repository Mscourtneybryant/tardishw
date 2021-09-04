import React, { Component } from 'react';
import DivTwo from './DivTwo';



 class DivOne extends Component {
  render() {
    return (
      <div>
        <DivTwo text={this.props.text} />
      </div>
    );
  }
}

export default DivOne;