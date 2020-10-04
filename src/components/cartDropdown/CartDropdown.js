import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../customButton/CustomButton";
import "./CartDropdown.scss";
import CartItem from "../cartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">No items yet :(</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
