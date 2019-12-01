import React from 'react';
import Logo from '../Images/Logo.png'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Ok9jGKKmyotLcqjoZ9FpWrjd00unLufKEM';

    const onToken = token => {
        console.log(token);
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Franklin Generals LLC.'
            billdingAddress
            shippingAddress
            image={Logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;