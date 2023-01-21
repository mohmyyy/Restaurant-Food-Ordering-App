import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext)
  const buttonClickHandler = (event) =>{
    event.preventDefault()
    const quantity = document.getElementById("amount__"+props.id).value;
    ctx.addItem({...props.item,quantity:quantity})
  }
  return (
    <div>
      <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount__"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <footer>
        <button onClick={buttonClickHandler} className={classes.button} type="button">
          + Add
        </button>
      </footer>
    </form>
    </div>
  );
};

export default MealItemForm;
