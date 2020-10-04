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
