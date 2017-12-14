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
    this.state = {name:'',date:'', button: '', currentImageString: '', predictionNM: '', cont:'', color:'', predictionM: '', status: 1};
    }

    parsePrediction = (response) => {
    this.setState({predictionNM: response.data.probabilities[0]})
    this.setState({predictionM: response.data.probabilities[1]})
    this.setState({cont: response.data.contour});
    this.setState({color: response.data.colorplot});
    console.log(response);
    }

    // parseResults = (response) => {
    // this.setState({cont: response.data.contour});
    // this.setState({color: response.data.colorplot});
    // this.setState({status: 2});
    // }

    onUpload = (files) => {
        const reader = new FileReader()
        const file = files[0]
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            console.log(reader.result);
            this.setState({currentImageString: reader.result});
              axios.post('http://localhost:8000/',
                 {image: reader.result,
                 name: this.state.name,
                 date: this.state.date,
                 button: this.state.button
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
        this.setState({status: 2})
     }

    handleButton = (event,value) =>
    {
        this.setState({button:event.target.value})
        // alert(this.state.value);
    }

    render(){
    const status = this.state.status
    if (status == 1) {
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
            <img src ={this.state.currentImageString}/>
            <RaisedButton onClick = {this.handleSubmit} label = "Submit and View Results" style = {styles.margin} />
            </form>
    </div>
    )
    }

    else if (status == 2) {
    return(
    <div>
            <h2 align = 'center'> Melanoma Predictions </h2>
            <OutTable
            predictionM = {this.state.predictionM}
            predictionNM = {this.state.predictionNM}
            name = {this.state.name}
            date = {this.state.date}
            />
            <h2 align = 'left'> Melanoma Border </h2>
            <img src ={this.state.cont}/>
            <br/>
            <h2 align = 'left'> Melanoma Color </h2>
            <img src ={this.state.color}/>
    </div>
    )
    }

}

}

export default PatientForm