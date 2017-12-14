import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import OutTable from './outputtable';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  margin: 12,
};

var axios = require('axios');

class PatientForm extends React.Component {
    constructor(props) {
    super(props)
    this.state = {name:'',date:'', button: ''};
    }

    handleNameChange = (event) =>
    {
        this.setState({name: event.target.value});
    }

    handleDateChange = (event) =>
    {
        this.setState({date: event.target.value});
    }

    handleSubmit = (event) =>
     {
        alert('Entry was submitted for: ' + this.state.name + '. Gender is ' + this.state.button);
        axios.post('http://localhost:8000/',
                 {name: this.state.name,
                 date: this.state.date,
                 button: this.state.button
                 })
     }

    handleButton = (event,value) =>
    {
        this.setState({button:event.target.value})
        // alert(this.state.value);
    }

    render() {
        return(
            <div>
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name:
                    <input value = {this.state.name}
                    onChange = {this.handleNameChange}
                    />
                </label>
                <br/>
                <label>
                    Date:
                    <input value = {this.state.date}
                    onChange = {this.handleDateChange}
                    />
                </label>
                <br/>
            <RadioButtonGroup name = "gender" defaultSelected = "Male" onChange = {this.handleButton}>
            <RadioButton
                value = "M"
                label = "Male"
                style = {styles.radioButton}
            />
            <RadioButton
                value = "F"
                label = "Female"
                style = {styles.radioButton}
            />
            </RadioButtonGroup>
            <RaisedButton onClick = {this.handleSubmit} label = "Submit" style = {styles.margin} />
            </form>
            </div>
            );
    }

}

export default PatientForm

