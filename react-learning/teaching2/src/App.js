import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import Upload from './upload';
import PatientForm from './textbox';

class App extends Component {
  constructor(props) {
        super(props)
        this.state = {open: false};
        }

  handleToggle = () => this.setState({open: !this.state.open});

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



// onLeftIconButtonClick{this.handleToggle}/>
            // <Drawer open = {this.state.open}>
            // <MenuItem> Menu Item </MenuItem>
            // <MenuItem> Menu Item 2 </MenuItem>
            // </Drawer>