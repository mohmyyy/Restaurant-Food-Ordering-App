import { Fragment } from "react";
import Header from "./components/Layout/Header";
// import AvailableMeals from "./components/Meals/AvailableMeals";
import Meals from "./components/Meals/Meals";
// import MealSummary from "./components/Meals/MealSummary";

function App() {
  return(
    <Fragment>
    <Header />
    <main>
      <Meals />
    </main>
  </Fragment>
  )
}

export default App;
