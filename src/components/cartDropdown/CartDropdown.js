import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./CartDropdown.scss";
import CartItem from "../cartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
