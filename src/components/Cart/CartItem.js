import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const [quantity,setQuantity] = useState(props.item.quantity);
  const ctx = useContext(CartContext);
  const removeQuantity = () => {
    props.onRemove()
    setQuantity((prevValue)=>+prevValue-1)
  }
  const clickMe =()=> {
    setQuantity((prevValue)=>+prevValue+1)
    props.onAdd()
    console.log(ctx.items)
  }
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.item.meal}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{(+quantity*+props.item.price).toFixed(2)}</span>
          <span className={classes.amount}>x{quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeQuantity}>−</button>
        <button onClick={clickMe}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
