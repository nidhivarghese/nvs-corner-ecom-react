import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from "./components/header/header.component";
import HomePage from './page/hompage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInPage from './page/sign-in/sign-in-page.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
