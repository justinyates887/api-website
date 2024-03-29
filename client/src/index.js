import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/App.css';
import './assets/styles/style.scss'
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
     <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
