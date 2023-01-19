import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [logModal,setLogModal] = useState(false);
  const showModal = () => {
    setLogModal(true)
  } 
  const closeModal = () => {
    setLogModal(false)
  }
  return (
    <Fragment>
      {logModal && <Cart onCLose={closeModal} />}
      <Header onClick={showModal} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
