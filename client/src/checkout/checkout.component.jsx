import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';

import CheckoutItem from '../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
        <div className='container-fluid checkout-page-container'>
            <div className='row checkout-page-container-row1'>
                <div className='col-2.4 checkout-page-container-row1-col'>
                    <span>Product</span>
                </div>
                <div className='col-2.4 checkout-page-container-row1-col'>
                    <span>Description</span>
                </div>
                <div className='col-2.4 checkout-page-container-row1-col'>
                    <span>Quantity</span>
                </div>
                <div className='col-2.4 checkout-page-container-row1-col'>
                    <span>Price</span>
                </div>
                <div className='col-2.4 checkout-page-container-row1-col'>
                    <span>Remove</span>
                </div>
            </div>
            <div className='row checkout-page-container-row2'>
                <div className='col-12  checkout-page-container-row2-col'>
                    {
                    cartItems.map(cartItem => 
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                    }
                </div>
            </div>
            <div className='row checkout-page-container-row3'>
                <div className='col-12 checkout-page-container-row3-col'>
                    <div className='checkout-page-container-row3-col-total'>
                    <span>TOTAL: ${total}</span>
                    </div>
                    <div className='checkout-page-container-row3-col-test-warning'>
                        *PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENTS**
                        <br />
                        <span className='col-test-warning-testcard'>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</span>
                    </div>
                </div>
                <StripeCheckoutButton price={total} />
            </div>
        </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);