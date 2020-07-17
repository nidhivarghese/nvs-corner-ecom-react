import React from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState( {email: '', password: ''} )
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h1 className='title'>I already have an Account</h1>
                <span className='subtitle'>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' 
                        name='email' 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        label='email'
                        required />

                    <FormInput type='password' 
                        name='password'
                        value={this.state.password} 
                        onChange={this.handleChange}
                        label='password'
                        required />
                    <CustomButton type='submit'>Submit Form</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignIn;