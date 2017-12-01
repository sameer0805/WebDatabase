import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Upload from './upload';

class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
            <AppBar style = {{'width': '50%'}} title = "Melanoma Detector" showMenuIconButton = {false}/>
            <Upload/>
            // My own upload component  (Better to encapsulate than use one block)
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
