import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload'
import OutTable from './outputtable';
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

var axios = require('axios');

class PatientForm extends React.Component {
    constructor(props) {
    super(props)
    this.state = {name:'',date:'', button: '', currentImageString: '', prediction: ''};

    }

    parsePrediction = (response) => {
    this.setState({prediction: response.data.probabilities})
    console.log(response);
    }

    onUpload = (files) => {
        const reader = new FileReader()
        const file = files[0]
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            this.setState({currentImageString: reader.result});
              axios.post('http://localhost:8000/',
                 {image: reader.result
                 })
                .then(this.parsePrediction);
        }
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

    render(){
    return(
    <div>
            <h2 align = 'center'> Upload your image </h2>
            <UploadField onFiles = {this.onUpload}>
                <div style = {{
                    backgroundColor : 'gray',
                    width : '250px',
                    height: '250px',
                    textAlign: 'center'}}>
                    Upload
                    </div>
            </UploadField>
            <img src={this.state.currentImageString}/>
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
            <OutTable
            prediction={this.state.prediction}
            name = {this.state.name}
            date = {this.state.date}
            />
    </div>
    )

    }

}

export default PatientForm