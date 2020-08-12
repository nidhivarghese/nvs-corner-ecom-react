import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../util/firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';


import './header.styles.scss';
import { selectCartHidden } from '../../redux/cart/cart.selectors';


const Header = ( {currentUser , hidden } ) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>Shop</Link>
            <Link to='/contact' className='option'>Contact</Link>
            {
                currentUser?
                (<div className='option' onClick={ () => auth.signOut() } >Sign Out</div>)
                :
                (<Link to='/sign-in' className='option'>Sign In</Link>)
            }
            <Link to='/cart' className='option'>Cart</Link>
            <CartIcon />
        </div>
        { hidden? null: <CartDropdown /> }
    </div>
);

/*
Without Selectors
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

With normal selectors

const mapStateToProps = ( state ) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
});

*/

//with createStructuredSelector - sends top level state as arg
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);