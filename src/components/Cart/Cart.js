import { useContext, useState } from "react";
import Modal from "../Layout/Modal";
import CartContext from "../store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const AddHandler = () => {
    setQuantity((prevSate) => +prevSate + 1);
  };
  const removeHandler = ()=> {
    setQuantity((prevSate) => +prevSate - 1);
  }

  const carts = ctx.items.map((item) => {
    return <CartItem onRemove = {removeHandler} onAdd={AddHandler} item={item} />;
  });
  ctx.items.forEach((item) => {
    ctx.tottalAount = ctx.tottalAount + +item.price * +item.quantity;
  });
  console.log(ctx.items)
  return (
    <Modal onCheck={props.onCLose}>
      {carts}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.tottalAount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        {<button className={classes["button--alt"]}>Order</button>}
        <button className={classes.button} onClick={props.onCLose}>
          CLose
        </button>
      </div>
    </Modal>
  );
};
export default Cart;

// <ul className={classes["cart-items"]}>
//   {ctx.items.map((item) => (
//     <li>{item.meal}-{item.quantity}-{item.price}</li>
//   ))}
// </ul>
