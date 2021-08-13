import "./App.css";
import Header from "./componenets/Header";
import Homepage from "./componenets/Homepage";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./componenets/Shop";
import ShoppingCart from "./componenets/ShoppingCart";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={ShoppingCart} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
