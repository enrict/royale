import React from "react";
import "./Checkout.scss";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeButton from "../../components/stripe-button/StripeButton";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Qty</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>Total: £{total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - <b>EXP:</b> 04/24 - <b>CVV:</b> 424
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
