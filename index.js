import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const tardis = 'Time and Relative Dimension in Space'

ReactDOM.render(
  <React.StrictMode>
    <App text = {tardis}/>
  </React.StrictMode>,
  document.getElementById('root')
);
