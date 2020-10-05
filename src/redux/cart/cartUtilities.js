export const addItemToCart = (cartItems, cartItemToAdd) => {
  // searches through the cart for the ID to see if it matches to an ID in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if an item already exists
  if (existingCartItem) {
    return cartItems.map((
      cartItem //map through all items
    ) =>
      cartItem.id === cartItemToAdd.id // find the item id that matches
        ? {
            ...cartItem, // give me all details about the item
            quantity: cartItem.quantity + 1, // increment the quantity of that item
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const subtractItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(
    (cartItem) =>
      cartItem.id === cartItemToRemove.id // if the item id matches the itemID you want to remove
        ? { ...cartItem, quantity: cartItem.quantity - 1 } // update the items Qty and take 1 away
        : cartItem // otherwise, return the item and continue mapping
  );
};
