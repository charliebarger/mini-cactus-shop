import "./App.css";
import Header from "./componenets/Header";
import Homepage from "./componenets/Homepage";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./componenets/Shop";
import ShoppingCartPage from "./componenets/ShoppingCartPage";
import ItemDetail from "./componenets/ItemDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop/:skew" component={ItemDetail} />
          <Route path="/cart" component={ShoppingCartPage} />
          <Route path="/shop" component={Shop} />

          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
