import Modal from "../Layout/Modal";
import classes from "./Cart.module.css";
const Cart = () => {
  const CartItems =(<ul className={classes["cart-items"]}> {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) =>( 
      <li>{item.name}</li>
      ))}
  </ul>
  );

  return (
    <Modal>
      <div>{CartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ 35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Order</button>
        <button className={classes.button}>CLose</button>
      </div>
    </Modal>
  );
};
export default Cart;
