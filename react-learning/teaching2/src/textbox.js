import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  margin: 12,
};

class PatientForm extends React.Component {
    constructor(props) {
    super(props)
    this.state = {name:''}
    this.state = {date: ''};
    }

    handleInputChange = (event) =>
    {
        this.setState({value: event.target.name});
        this.setState({value: event.target.date});
    }

    handleSubmit = (event) =>
     {
        alert('Entry was submitted for: ' + this.state.name);
     }

    render() {
        return(
            <div>
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name:
                    <input name = {this.state.name}
                    onChange = {this.handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Date:
                    <input date = {this.state.date}
                    onChange = {this.handleInputChange}
                    />
                </label>
                <br/>
            </form>
            <RadioButtonGroup name = "gender" defaultSelected = "Male">
            <RadioButton
                value = "light"
                label = "Male"
                style = {styles.radioButton}
            />
            <RadioButton
                value = "not_light"
                label = "Female"
                style = {styles.radioButton}
            />
            </RadioButtonGroup>
            <RaisedButton onClick = {this.handleSubmit} label = "Submit" style = {styles.margin} />
            </div>
            );
    }

}

export default PatientForm

