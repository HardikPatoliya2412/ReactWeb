import Banners from "./Banners";
import Product from "./Product";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from "./CheckOut";

export default function HomePageContent() {
  return (
    <Router>
      < Switch>
        <Route exact path="/">
          <div className="max-w-screen-2xl mx-auto ">
            <Banners />
            <Product />
          </div>
        </Route>
        <Route path="/cart">
           <CheckOut/>
        </Route>
        </ Switch>
    </Router>
  );
}
