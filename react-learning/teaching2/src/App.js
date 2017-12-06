import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Upload from './upload';
import PatientForm from './textbox';

class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
            <AppBar style = {{'width': '100%'}} title = "Melanoma Detector" showMenuIconButton = {true}/>
            <Upload/>
            <PatientForm/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
