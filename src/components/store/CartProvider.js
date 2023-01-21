import { useState } from "react";
import CartContext from "./cart-context";

const CartProvide = (props) => {
  const [item, setItem] = useState([]);

  const addItemToCartHandler = (item) => {
    setItem((prevValue) => {
        return [...prevValue, item];
    });
  };
  const removeItemFromCartHandler = () => {};

  const cartContext = {
    items: item,
    tottalAount: +0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvide;
