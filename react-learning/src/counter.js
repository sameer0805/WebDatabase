import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            'count': 0
        };

    }

    increment = () => {
        this.setState({'count': this.state.count + 1});
    }

    render(){
        return (
        <div onClick = {this.increment}>
            {this.props.name} : {this.state.count}
        </div>
        )
    }
}

export default Counter;