import React, { Component } from 'react';
import './sponsorsres.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import firebase from '../firebase/firebase.utils'

class SponsorsRes extends Component {
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
            alert("Submission Successful.  Thank you for your support of the Franklin Generals")
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
            <div className='container-fluid sponsorsres-container'>
                <div className='row sponsorsres-row'>
                    <div className='col-4 sponsorsres-col-content'>
                        <div className='sponsorsres-col-content-image'></div>
                        <div className='sponsors-col-content-team-sponsors'>
                            <h1 className='sponsors-col-content-team-sponsors-title'>FRANKLIN GENERALS TEAM SPONSORS</h1>
                            <a className='sponsors-col-content-team-sponsors-link' href='https://musiccitytax.com/' >Music City Tax</a>
                            <br />
                            <a className='sponsors-col-content-team-sponsors-link' href='https://www.facebook.com/quinnspubtn/'>Quinn's Neighbourhood Pub</a>
                            <br />
                            <a className='sponsors-col-content-team-sponsors-link' href='https://www.llflooringcompany.com/'>L & L Flooring Company</a>
                            <br />
                            <a className='sponsors-col-content-team-sponsors-link' href='https://accuworks.com/'>Accuworks</a>
                            <br />
                            <a className='sponsors-col-content-team-sponsors-link' href='https://www.bklynbrospizza.com/'>Brooklyn Brothers Pizza</a>
                        </div>
                    </div>
                    <div className='col-8 sponsorsres-col-signup'>
                        <div className='container sponsorsres-signup-form'>
                            <h2 className='sponsorsres-signup-title'>Become a team sponsor</h2>
                            <span className='sponsorsres-signup-subtitle'>Please complete the form below and someone will contact you shortly.</span>
                            <form className='sponsorsres-signup-form' onSubmit={this.handleSubmit}>
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
            </div>
        )
    }
}

export default SponsorsRes;

