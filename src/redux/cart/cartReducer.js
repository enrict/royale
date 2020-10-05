import { cartActionTypes } from "./cartActionTypes";
import { addItemToCart, subtractItemFromCart } from "./cartUtilities";

const initial_state = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.SUBTRACT_ITEM:
      return {
        ...state,
        cartItems: subtractItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
