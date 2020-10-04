import { cartActionTypes } from "./cartActionTypes";

const initial_state = {
  hidden: true,
};

const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};
export default cartReducer;
