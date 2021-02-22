import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  React.createElement(App, {title: 'render React Create Element'}, null),
  document.getElementById('root')
);
