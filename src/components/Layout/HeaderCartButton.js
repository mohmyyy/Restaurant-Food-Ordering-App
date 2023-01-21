import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext)
  let quantity = 0;
  cartCtx.items.forEach((item)=> {
    quantity = quantity + (+item.quantity)
  })
  return (
      <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon} >
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
          {quantity}
        </span>
      </button>
  );
};

export default HeaderCardButton;
