import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.styles.scss';
import { connect } from 'react-redux';
import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const NavBarLarge = ({ currentUser, hidden}) => (
    <div className='container-fluid navbarlarge-container'>
        <div className='row navbarlarge-container-row'>
            <div className='col-6 navbarlarge-container-row-left-col'>
                <NavLink className="navbar-brand" to='/homepage'><i className="fas fa-baseball-ball fa-sm"></i><span className='brand-span'>FG</span></NavLink>
                <NavLink className="nav-link" to='/teamshop'>Team-Shop<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" exact to='/sponsor'>Sponsors<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link" exact to='/blog'>Blog <span className="sr-only">(current)</span></NavLink>     
            </div>
            <div className='col-5 navbarlarge-container-row-right-col'>
                <ul className="navbar-nav navbarlarge-container-row-right-col-ul">
                    <li className='right-col-li' style={{color: 'yellow'}}>
                        { currentUser ? currentUser.displayName : ''}
                    </li>
                    <li className="nav-item right-col-li active">
                        { currentUser ? <div className="nav-link" onClick={() => auth.signOut()}>Sign Out<span className="sr-only">(current)</span></div>: ''}
                    </li>
                </ul>
            </div>
            <div className='col-1 navbarlarge-container-row-right-col2'>
                <ul className="navbar-nav navbarlarge-container-row-right-col2-ul">
                    <li className="nav-item cart-icon-navbarlarge active">
                        { currentUser ? <CartIcon /> : '' }
                    </li>
                </ul>
                 {hidden ? null : <CartDropdown />}
            </div>
        </div>
    </div>

);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(NavBarLarge);

