import { cartActionTypes } from "./cartActionTypes";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const subtractItem = (item) => ({
  type: cartActionTypes.SUBTRACT_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
