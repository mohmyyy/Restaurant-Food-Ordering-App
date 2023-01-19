import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
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
        <button onClick={props.onClick} className={classes.button} type="button">
          + Add
        </button>
      </footer>
    </form>
    </div>
  );
};

export default MealItemForm;
