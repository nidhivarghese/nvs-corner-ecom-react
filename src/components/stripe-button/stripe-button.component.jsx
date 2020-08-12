import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HFLZSFgWkAJUkyWYvAqmfUhDztBLmypvozKBwC1vwqvcvtrOES8zin9Igq3GCuW9Pk479o54EeoRIMjAIiRLj4b00tvcaKaoT";

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='NV Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;