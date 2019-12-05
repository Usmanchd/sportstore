import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Productlist from './components/Productlist';
import Cart from './components/Cart';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/products/:name">
          <div className="myc">
            <div className="row">
              <Sidebar />
              <hr />
              <Productlist />
            </div>
          </div>
        </Route>
        <Route path="/">
          <div className="myc">
            <div className="row">
              <Sidebar />
              <hr />
              <Productlist />
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
