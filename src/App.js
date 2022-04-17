import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShwown] = useState(false);

  const showCartHandler = () => {
    setCartIsShwown(true);
  };

  const hideCartHandler = () => {
    setCartIsShwown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
