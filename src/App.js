import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [shownModal, setShownModal] = useState(false);

  const showModalHandler = () => setShownModal(true);
  const hideModalHandler = () => setShownModal(false);

  return (
    <Fragment>
      {shownModal && <Cart onClose={hideModalHandler} />}
      <Header onClickCart={showModalHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
