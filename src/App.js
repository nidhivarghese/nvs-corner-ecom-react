import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from "./components/header/header.component";
import HomePage from './page/hompage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInPage from './page/sign-in/sign-in-page.component';
import { auth } from './util/firebase/firebase.util';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
    
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState( {currentUser: user} );
      console.log(user);
    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' component={SignInPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
