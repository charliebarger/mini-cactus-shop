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
  const updateCart = (item) => {
    let newCart = cart;
    item.quantity = 1;
    newCart.push(item);
    setCart([...newCart]);
  };

  const setQuantity = (skew, quantity) => {
    let newCart = cart;
    newCart.forEach((element) => {
      if (skew === element.skew) {
        element.quantity = quantity;
      }
    });
    setCart([...newCart]);
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop/:targetSkew">
            <ItemDetail setCart={updateCart} setQuantity={setQuantity} />
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
