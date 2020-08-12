import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from "./components/header/header.component";
import HomePage from './page/hompage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInPage from './page/sign-in/sign-in-page.component';
import CheckoutPage from './page/checkout/checkout.component';

import { auth, createUserProfileDocument } from './util/firebase/firebase.util';

import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => {
      //this.setState( {currentUser: user} );
      //console.log(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      }

      //this.setState({currentUser: userAuth});
      this.props.setCurrentUser(userAuth)

    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/sign-in' render={() => 
            this.props.currentUser? 
              (<Redirect to='/' />) : 
              (<SignInPage />) 
            } />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
