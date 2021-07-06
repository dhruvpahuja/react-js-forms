import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        FirstName: '',
        LastName:'',
        Email:'',
        Occupation:'',
        City: '',
        Address: ''
    }

    //move to next step
    nextStep = () => {
        const {step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //move to prev step
    prevStep = () => {
        const {step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    //this.handleChange =handleChange.bind(this);
    

    //handle changes
    handleChange = input => e => {
        
        if(input=="FirstName"){
            if(e.target.value.length <=10){
                this.setState({[input]: e.target.value});
            }
        }
        else if(input == "LastName"){
            if(e.target.value.length <=10){
                this.setState({[input]: e.target.value});
            }
        }
        else if(input == "Email"){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(e.target.value)){
                this.setState({[input]: e.target.value});
            }
        }
        else {
            this.setState({[input]: e.target.value});
        }
    }
    render() {
        const{step} = this.state;
        const { FirstName, LastName, email, occupation, city, Address} = this.state;
        

        switch(step){
            case 1:
                return(
                    <FormUserDetails
                    nextStep = {this.nextStep}
                    handleChange={this.handleChange}
                    values = {this.state}
                    />
                );
            case 2:
                return(
                    <FormPersonalDetails
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange={this.handleChange}
                    values = {this.state}
                    />
                );
            case 3:
                return(
                    <Confirm
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {this.state}
                    />
                );
                case 4:
                    return <Success />;
        }
    
    }
}

export default UserForm;
