import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div>
        Hello world!
        <Counter name = "Mark" />
        <Counter name = "Sameer" />
      </div>
    );
  }
}

export default App;



