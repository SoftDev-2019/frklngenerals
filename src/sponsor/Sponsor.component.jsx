import React, { Component } from 'react';
import './Sponsor.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import firebase from '../firebase/firebase.utils'

class Sponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            company: '',
            phone: ''
        };
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { name, email, company, phone} = this.state;
        try {
            const db = firebase.firestore();
            db.settings({
              timestampsInSnapshots: true
            });
            const userRef = db.collection('sponsors').add({
              name: name,
              email: email,
              company: company,
              phone: phone
            });  
            this.setState({
                name: '',
                email: '',
                company: '',
                phone: ''
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
        const {name, email, company, phone } = this.state;
        return (
            <div className='jumbotron sponsor'>
                <div className='sponsor-body'>
                    <div className='sponsor-logo-image'></div>
                    <div className='sponsor-list'>
                        <h1 className='sponsor-list-title'>FRANKLIN GENERALS TEAM SPONSORS</h1>
                        <a className='sponsor-list-link' href='https://musiccitytax.com/' >Music City Tax</a>
                        <br />
                        <a className='sponsor-list-link' href='https://www.facebook.com/quinnspubtn/'>Quinn's Neighbourhood Pub</a>
                        <br />
                        <a className='sponsor-list-link' href='https://www.llflooringcompany.com/'>L & L Flooring Company</a>
                        <br />
                        <a className='sponsor-list-link' href='https://accuworks.com/'>Accuworks</a>
                        <br />
                        <a className='sponsor-list-link' href='https://www.bklynbrospizza.com/'>Brooklyn Brothers Pizza</a>
                    </div>
                </div>
                <div className='sponsor-form'>
                        <div className='sponsor-sign-up'>
                            <h2 className='sponsor-sign-up-title'>Become a team sponsor</h2>
                            <span>Please complete the form below</span>
                            <form className='sponsor-sign-up-form' onSubmit={this.handleSubmit}>
                                <FormInput
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={this.handleChange}
                                    label='Name'
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
                                    type='text'
                                    name='company'
                                    value={company}
                                    onChange={this.handleChange}
                                    label='Company'
                                    required
                                />
                                <FormInput
                                    type='text'
                                    name='phone'
                                    value={phone}
                                    onChange={this.handleChange}
                                    label='Phone'
                                    required
                                />
                                <CustomButton type='submit'>Submit</CustomButton>
                            </form>
                        </div>
                </div>
            </div>
        );
    }
}

export default Sponsor;