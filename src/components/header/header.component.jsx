import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../util/firebase/firebase.util';

import './header.styles.scss';

const Header = ( {currentUser} ) => (
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
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);