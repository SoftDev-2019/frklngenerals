import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = event => {
       const { value, name } = event.target;
       this.setState({ [name]: value});
    }
    render() {
        return (
            <div className='jumbotron sign-in-container'>
                <div className='sign-in'>
                    <h3>I already have an account</h3>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            label= 'email'
                            name='email' 
                            type='email' 
                            value={this.state.email} 
                            required 
                            handleChange={this.handleChange}
                        />
                        <FormInput 
                            label='password'
                            name='password' 
                            type='password' 
                            value={this.state.password} 
                            required
                            handleChange={this.handleChange}
                        />
                        <div className='buttons'>
                            <CustomButton type='submit'>SIGN IN</CustomButton>
                            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                                {' '}
                                SIGN IN WITH GOOGLE{' '}
                            </CustomButton>
                        </div>
                    </form>
                    <Link className='sign-up-link' exact to='/signup'>Create Account</Link>
                </div>
            </div>
        );
    }
}

export default SignIn;
