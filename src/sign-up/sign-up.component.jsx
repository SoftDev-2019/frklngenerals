import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        if(password.length < 6) {
            alert("Passwords must be at least 6 charachters in length!");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const {displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='container-fluid sign-up-container'>
                <div className='row sign-up-row'>
                    <div className='col-3 sign-up-col-fence'></div>
                    <div className='col-6 sign-up-col'>
                        <div className='container sign-up-container-form'>
                            <h3 className='sign-up-title'>Create an accout</h3>
                            <span>Sign up with your email and password</span>
                            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                                <FormInput
                                    type='text'
                                    name='displayName'
                                    value={displayName}
                                    onChange={this.handleChange}
                                    label='Display Name'
                                    required
                                />
                                <FormInput
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={this.handleChange}
                                    label='Email'
                                    required
                                />
                                <FormInput
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                    label='Password'
                                    required
                                />
                                <FormInput
                                    type='password'
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={this.handleChange}
                                    label='Confirm Password'
                                    required
                                />
                                <CustomButton type='submit'>SIGN UP</CustomButton>
                            </form>
                        </div>
                    </div>
                    <div className='col-3 sign-up-col-fence'></div>
                </div>
            </div>
        );
    }
}

export default SignUp;