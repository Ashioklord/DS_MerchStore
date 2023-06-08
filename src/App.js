import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Merch from "./components/Merch/Merch";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Merch />
      </main>
    </Fragment>
  );
}

export default App;
