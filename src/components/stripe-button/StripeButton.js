import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const stripePrice = price * 100;
  const testKey =
    "pk_test_51Hg69XF9z9enAI018Y2kfP4JncGSWcL01AfQ9utzsHzoVevfpzox7z2p1chIARVXl2IqRQcCuR3YjmuEm9ZCkILI00U8mdByDm";
  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Royale"
      billingAddress
      shippingAddress
      amount={stripePrice}
      locale="auto"
      currency="GBP"
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is £${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={testKey}
    />
  );
}

export default StripeButton;
