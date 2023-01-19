import { Fragment } from "react";
import HeaderCardButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealImage from '../../components/assets/meals.jpg'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCardButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt='Meals'></img>
      </div>
    </Fragment>
  );
};
export default Header;
