import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const{values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = " Enter User Details" />
                    <TextField
                    hintText = "Enter Your First Name"
                    floatingLabelText = "First Name"
                    onChange = { handleChange('FirstName') }
                    defaultValue = {values.FirstName}
                    />
                    <br/>
                    <TextField
                    hintText = "Enter Your Last Name"
                    floatingLabelText = "Last Name"
                    onChange = { handleChange('lastName') }
                    defaultValue = {values.lastName}
                    />
                     <br/>
                    <TextField
                    hintText = "Enter Your Email ID"
                    floatingLabelText = "Email ID"
                    onChange = { handleChange('Email') }
                    defaultValue = {values.Email}
                    />
                    <br/>
                    <RaisedButton
                    label = "Continue"
                    primary = {true}
                    style = {StyleSheet.buttton}
                    onClick = {this.continue}
                    />

                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;
