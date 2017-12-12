import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Upload from './upload';
import PatientForm from './textbox';
import OutTable from './outputtable';

class App extends Component {
        constructor(props) {
        super(props)
        this.state = {open: false};
        this.state = {screen: 1};
        }

  handleToggle = ()  => {
    this.setState({open: !this.state.open});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleMenuClose = () => {
    this.setState({screen: 1})
  }

  handleResults = () => {
    this.setState({screen: 2})
  }

  render() {
    const screen = this.state.screen;
    if (screen == 1){
    return (
      <div style = {{justifyContent:'center'}}>
      <MuiThemeProvider>
            <AppBar
                title="Melanoma Detector"
                showMenuIconButton = {true}
                onLeftIconButtonTouchTap = {this.handleToggle}/>
            <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            screen = {this.state.screen}
            >
            <MenuItem onClick = {this.handleResults}> Melanoma Results </MenuItem>
            <MenuItem onClick = {this.handleClose}> CLOSE MENU </MenuItem>
            </Drawer>
            <Upload/>
            <PatientForm/>
      </MuiThemeProvider>
      </div>
    );
    }

    else if (screen == 2){
    return (
    <div>
      <MuiThemeProvider>
            <AppBar
                title="Melanoma Detection Results"
                showMenuIconButton = {true}
                onLeftIconButtonTouchTap = {this.handleToggle}/>
            <OutTable/>
            <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            screen = {this.state.screen}
            >
            <MenuItem onClick = {this.handleResults}> Melanoma Results </MenuItem>
            <MenuItem onClick = {this.handleMenuClose}> Return to Home Page </MenuItem>
            </Drawer>
      </MuiThemeProvider>
    </div>
    )
    }
    }
}

export default App;
