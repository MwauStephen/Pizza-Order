import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

const App = () => {
  const [cartIsShown, setCartIsShwown] = useState(false);

  const showCartHandler = () => {
    setCartIsShwown(true);
  };

  const hideCartHandler = () => {
    setCartIsShwown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
