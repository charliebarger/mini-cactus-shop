import "./App.css";
import Header from "./componenets/Header";
import Homepage from "./componenets/Homepage";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./componenets/Shop";
import ShoppingCartPage from "./componenets/ShoppingCartPage";
import ItemDetail from "./componenets/ItemDetail";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  function updateCart(item) {
    if (!cart.some((value) => value.skew === item.skew)) {
      setCart([...cart, { ...item }]);
    }
  }

  function updateQuantity(skew, quantity) {
    console.log(skew, quantity);
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].skew === skew && cart[i].quantity !== quantity) {
        let newQuantity = [...cart];
        newQuantity[i].quantity = quantity;
        setCart(newQuantity);
        break;
      }
    }
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop/:targetSkew">
            <ItemDetail setCart={updateCart} updateQuantity={updateQuantity} />
          </Route>
          <Route path="/cart" component={ShoppingCartPage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
