import React from "react";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine/VendingMachine";
import Snack from "./Snack/Snack";
import './App.css';

function App() {
  const [snacks] = useState({ candy: { url: "/candy", name: "candy", price: "1.50" }, chips: { url: "/chips", name: "chips", price: "1.75" }, gum: { url: "/gum", name: "gum", price: "1.50" }, soda: { url: "/soda", name: "soda", price: "2.00" } })
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine snacks={snacks} />
        </Route>
        <Route exact path="/candy">
          <Snack snack="candy" price="1.50" />
        </Route>
        <Route exact path="/gum">
          <Snack snack="gum" price="1.75" />
        </Route>
        <Route exact path="/chips">
          <Snack snack="chips" price="1.75" />
        </Route>
        <Route exact path="/soda">
          <Snack snack="soda" price="2.00" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
