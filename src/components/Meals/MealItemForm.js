import classes from './MealItemForm.module.css'

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <label htmlFor="amount">Amount</label>
        <input type="number" value="1" id="amount"></input>
      </div>
      <footer>
        <button className={classes.button} type="button"> + Add</button>
      </footer>
    </form>
  );
};

export default MealItemForm