import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I4BqSL04DPiKebfz4pFl1EINifG6y6fdPMlDbQgo4oAPoOoszAcz178Wi5F2CDgefTRX4cjr4F2aQMsYL4qHRir00axI80ag9';

  const onToken = token => {
    console.log(token);
    alert('Payment Test Succesful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Royal Clothing Pt.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;