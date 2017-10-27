import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Installs webfonts
// Source: https://scotch.io/@micwanyoike/how-to-add-fonts-to-a-react-project
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Graduate:300,400,700', 'Lobster:300,400,700', 'cursive']
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
