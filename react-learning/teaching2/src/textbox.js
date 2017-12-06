import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class PatientForm extends React.Component {
    constructor(props) {
    super(props)
    this.state = {name:''};
    this.state = {date:''};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.name});
    }

    handleChangeDate(event) {
        this.setState({date: event.target.date});
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
                    <input value = {this.state.name} onChange = {this.handleChangeName}/>
                </label>
                <br/>
                <label>
                    Date:
                    <input value = {this.state.date} onChange = {this.handleChangeDate}/>
                </label>
            </form>
            );
    }

}

export default PatientForm

