import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCardButton = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon} >
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
          0
        </span>
      </button>
    </>
  );
};

export default HeaderCardButton;
