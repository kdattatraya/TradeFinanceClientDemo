import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import routes from './routes';

ReactDOM.render(
    <Router>
      <App>{routes}</App>
    </Router>
  , document.getElementById('root'));

registerServiceWorker( );

