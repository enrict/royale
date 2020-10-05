import { createSelector } from "reselect";

//getting the cart state
const selectCart = (state) => state.cart;

//getting the items info in the cart
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//getting the cart value from state
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//getting total price from state
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQty, cartItem) =>
      accumulatedQty + cartItem.quantity * cartItem.price,
    0
  )
);

//getting total qty of items from state
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
      0
    )
);
