import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import { Button} from 'react-bootstrap';
export default class Institute extends Component {
    constructor(props) {
        super(props);
        this.state = {resdata: []};
    }
    componentDidMount() {
        axios.get('http://localhost:4000/mydatabase/')
            .then(response => {
                this.setState({ resdata: response.data });
                console.log(this.state.resdata);
            })
            .catch(function (error){
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <Header/>
                <h3>Welcome To Dashboard</h3>   
            </div>    
        )
    }
}

