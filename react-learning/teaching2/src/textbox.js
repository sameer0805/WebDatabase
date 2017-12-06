import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class PatientForm extends React.Component {
    constructor(props) {
    super(props)
    this.state = {name:''}
    this.state = {data: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({value: event.target.name});
        this.setState({value: event.target.date});
        }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Name:
                    <input name = {this.state.value} onChange = {this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Date:
                    <input date = {this.state.value} onChange = {this.handleInputChange}/>
                </label>
            </form>
            );
    }

}

export default PatientForm

