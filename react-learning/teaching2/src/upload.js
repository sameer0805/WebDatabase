import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload'
import OutTable from './outputtable';

var axios = require('axios');

class Upload extends Component{
   constructor(){
        super();
        this.state = {
            currentImageString: '',
            prediction: '',
        }
    }

    parsePrediction = (response) => {
    this.setState({prediction: response.data})
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

   render(){
     return (
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
            <OutTable prediction={this.state.prediction}/>
         </div>
     );
   }
}

export default Upload