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

  const filterDuplicates = (item) => {
    const newCart = cart;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].skew === item.skew) {
        newCart[i].quantity =
          newCart[i].quantity > item.quantity
            ? newCart[i].quantity
            : item.quantity;
        return newCart;
      }
    }
    newCart.push(item);
    return newCart;
  };

  const updateCart = (item) => {
    let newCart = filterDuplicates(item);
    setCart([...newCart]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop/:targetSkew">
            <ItemDetail setCart={updateCart} />
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
