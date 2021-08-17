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

  const filterDuplicates = (item) => {
    const newItem = {
      skew: item.skew,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    };
    const newCart = cart;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].skew === newItem.skew) {
        newCart[i].quantity = newItem.quantity;
        return newCart;
      }
    }
    newCart.push(newItem);
    return newCart;
  };

  const updateCart = (item) => {
    console.log(cart);
    const newItem = item;
    let newCart = filterDuplicates(newItem);
    setCart(newCart);
  };

  const setQuantity = (item, quantity) => {
    item.quantity = quantity;
    return item;
  };
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop/:targetSkew">
            <ItemDetail setCart={updateCart} setQuantity={setQuantity} />
          </Route>
          <Route path="/cart">
            <ShoppingCartPage items={cart} setQuantity={setQuantity} />
          </Route>
          <Route path="/shop" component={Shop} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
