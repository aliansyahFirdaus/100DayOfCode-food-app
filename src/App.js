import React, { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [shownModal, setShownModal] = useState(false);

  const showModalHandler = () => setShownModal(true);
  const hideModalHandler = () => setShownModal(false);

  return (
    <CartProvider>
      {shownModal && <Cart onClose={hideModalHandler} />}
      <Header onClickCart={showModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
