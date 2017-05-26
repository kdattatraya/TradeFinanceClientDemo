import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            {this.props.children}
      </div>
    );
  }
}

App.prototypes = {
  children: PropTypes.object.isRequired
};

export default App;


