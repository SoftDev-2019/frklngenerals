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
            <div className='container-fluid sign-in-container'>
                <div className='row sign-in-row'>
                    <div className='col-3 sign-in-col-fence'></div>
                    <div className='col-6 sign-in-col'>
                        <div className='container sign-in-container-form'>
                            <h3 className='sign-in-title'>I already have an account</h3>
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
                    <div className='col-3 sign-in-col-fence'></div>
                </div>
            </div>
        );
    }
}

export default SignIn;
