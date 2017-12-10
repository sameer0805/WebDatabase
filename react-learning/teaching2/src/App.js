import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Upload from './upload';
import PatientForm from './textbox';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
        constructor(props) {
        super(props)
        this.state = {open: false};
        this.state = {screen: 1};
        }

  handleToggle = ()  => {
    this.setState({open: !this.state.open});
    console.log('Hello')
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleMenuClose = () => {
    this.setState({screen: 1})
  }

  handlePredict = () => {
    this.setState({screen: 2})
  }

  handleSymmetry = () => {
    this.setState({screen: 3})
  }

  handleColor = () => {
    this.setState({screen: 4})
  }

  handleBorder = () => {
    this.setState({screen:5})
  }

  handleDiameter = () => {
    this.setState({screen:6})
  }

  render() {
    const screen = this.state.screen;
    if (screen == 1){
    return (
      <div>
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
            <MenuItem onClick = {this.handlePredict}> Melanoma Predictions </MenuItem>
            <MenuItem onClick = {this.handleSymmetry}> Melanoma Asymmetry</MenuItem>
            <MenuItem onClick = {this.handleColor}> Melanoma Color </MenuItem>
            <MenuItem onClick = {this.handleBorder}> Melanoma Border </MenuItem>
            <MenuItem onClick = {this.handleDiameter}> Melanoma Diameter </MenuItem>
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
                title="Melanoma Detector"
                showMenuIconButton = {true}
                onLeftIconButtonTouchTap = {this.handleToggle}/>
            <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            screen = {this.state.screen}
            >
            <MenuItem onClick = {this.handlePredict}> Melanoma Predictions </MenuItem>
            <MenuItem onClick = {this.handleSymmetry}> Melanoma Asymmetry</MenuItem>
            <MenuItem onClick = {this.handleColor}> Melanoma Color </MenuItem>
            <MenuItem onClick = {this.handleBorder}> Melanoma Border </MenuItem>
            <MenuItem onClick = {this.handleDiameter}> Melanoma Diameter </MenuItem>
            <MenuItem onClick = {this.handleMenuClose}> Return to Home Page </MenuItem>
            </Drawer>
      </MuiThemeProvider>
    </div>
    )
    }

    else if (screen == 3){
    return (
    <div>
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
            <MenuItem onClick = {this.handlePredict}> Melanoma Predictions </MenuItem>
            <MenuItem onClick = {this.handleSymmetry}> Melanoma Asymmetry</MenuItem>
            <MenuItem onClick = {this.handleColor}> Melanoma Color </MenuItem>
            <MenuItem onClick = {this.handleBorder}> Melanoma Border </MenuItem>
            <MenuItem onClick = {this.handleDiameter}> Melanoma Diameter </MenuItem>
            <MenuItem onClick = {this.handleMenuClose}> Return to Home Page </MenuItem>
            </Drawer>
      </MuiThemeProvider>
    </div>
    )
    }

    else if (screen == 4){
    return (
    <div>
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
            <MenuItem onClick = {this.handlePredict}> Melanoma Predictions </MenuItem>
            <MenuItem onClick = {this.handleSymmetry}> Melanoma Asymmetry</MenuItem>
            <MenuItem onClick = {this.handleColor}> Melanoma Color </MenuItem>
            <MenuItem onClick = {this.handleBorder}> Melanoma Border </MenuItem>
            <MenuItem onClick = {this.handleDiameter}> Melanoma Diameter </MenuItem>
            <MenuItem onClick = {this.handleMenuClose}> Return to Home Page </MenuItem>
            </Drawer>
      </MuiThemeProvider>
    </div>
    )
    }

    else if (screen == 5){
    return (
        <div>
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
            <MenuItem onClick = {this.handlePredict}> Melanoma Predictions </MenuItem>
            <MenuItem onClick = {this.handleSymmetry}> Melanoma Asymmetry</MenuItem>
            <MenuItem onClick = {this.handleColor}> Melanoma Color </MenuItem>
            <MenuItem onClick = {this.handleBorder}> Melanoma Border </MenuItem>
            <MenuItem onClick = {this.handleDiameter}> Melanoma Diameter </MenuItem>
            <MenuItem onClick = {this.handleMenuClose}> Return to Home Page </MenuItem>
            </Drawer>
      </MuiThemeProvider>
    </div>
    )
    }

    else if (screen == 6){
    return (
    <div>
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
            <MenuItem onClick = {this.handlePredict}> Melanoma Predictions </MenuItem>
            <MenuItem onClick = {this.handleSymmetry}> Melanoma Asymmetry</MenuItem>
            <MenuItem onClick = {this.handleColor}> Melanoma Color </MenuItem>
            <MenuItem onClick = {this.handleBorder}> Melanoma Border </MenuItem>
            <MenuItem onClick = {this.handleDiameter}> Melanoma Diameter </MenuItem>
            <MenuItem onClick = {this.handleMenuClose}> Return to Home Page </MenuItem>
            </Drawer>
      </MuiThemeProvider>
    </div>
    )
    }
    }
}

export default App;
