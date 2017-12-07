import React, { Component } from 'react';
// import View from 'react-native';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Upload from './upload';
import PatientForm from './textbox';
// import styles from './centering'

class App extends Component {
        constructor(props) {
        super(props)
        this.state = {open: false};
        }

  handleToggle = ()  => {
    this.setState({open: !this.state.open});
    console.log('Hello')
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
      <MuiThemeProvider>
            <AppBar
                title="Melanoma Detector"
                showMenuIconButton = {true}
                onLeftIconButtonClick = {this.handleToggle} />
            <Drawer
            docked={true}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
            <MenuItem> Melanoma Predictions </MenuItem>
            <MenuItem> Melanoma Asymmetry</MenuItem>
            <MenuItem> Melanoma Color </MenuItem>
            <MenuItem> Melanoma Border </MenuItem>
            <MenuItem> Melanoma Diameter </MenuItem>
            </Drawer>
            <Upload/>
            <PatientForm/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
