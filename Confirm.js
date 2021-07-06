import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Confirm extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    };
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const{values: {FirstName, LastName, Email, Occupation, City, Address}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = " Confirm User Details" />
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { FirstName}
                        />
                        <ListItem
                            primaryText = "Last Name"
                            secondaryText = { LastName}
                        />
                        <ListItem
                            primaryText = "Email"
                            secondaryText = { Email}
                        />
                        <ListItem
                            primaryText = "Ocuupation"
                            secondaryText = { Occupation}
                        />
                        <ListItem
                            primaryText = "City"
                            secondaryText = { City}
                        />
                        <ListItem
                            primaryText = "Address"
                            secondaryText = { Address}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                    label = "Confirm & Continue"
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

export default Confirm;
