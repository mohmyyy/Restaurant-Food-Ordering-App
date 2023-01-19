import Cart from "../Cart/Cart";
import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <div className={classes.summary}>
      <h2> Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection f availale meals and
        enjoy a delicious lunch delivered at home
      </p>
      <p>
        All our means are cooked with high quality ingredients, just-in-time ans
        of course by experience chefs!
      </p>
    </div>
  );
};

export default MealSummary;
