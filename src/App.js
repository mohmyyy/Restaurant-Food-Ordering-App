import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvide from "./components/store/CartProvider";

function App() {
  const [logModal,setLogModal] = useState(false);
  const showModal = () => {
    setLogModal(true)
  } 
  const closeModal = () => {
    setLogModal(false)
  }
  return (
    <CartProvide>
      {logModal && <Cart onCLose={closeModal} />}
      <Header onClick={showModal} />
      <main>
        <Meals />
      </main>
    </CartProvide>
  );
}

export default App;
