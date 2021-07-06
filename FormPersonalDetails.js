import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const{values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = " Enter Personal Details" />
                    <TextField
                    hintText = "Enter Your Ocuupation"
                    floatingLabelText = "Occupation"
                    onChange = { handleChange('Occupation')}
                    defaultValue = {values.Occupation}
                    />
                    <br/>
                    <TextField
                    hintText = "Enter Your City"
                    floatingLabelText = "City"
                    onChange = {handleChange('City')}
                    defaultValue = {values.City}
                    />
                     <br/>
                    <TextField
                    hintText = "Enter Your Address"
                    floatingLabelText = "Address"
                    onChange = {handleChange('Address')}
                    defaultValue = {values.Address}
                    />
                    <br/>
                    <RaisedButton
                    label = "Continue"
                    primary = {true}
                    style = {StyleSheet.buttton}
                    onClick = {this.continue}
                    />
                    <RaisedButton
                    label = "Back"
                    primary = {false}
                    style = {StyleSheet.buttton}
                    onClick = {this.back}
                    />

                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetails;
