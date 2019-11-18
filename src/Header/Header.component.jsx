import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Header.styles.scss';
import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';


const Header = ({ currentUser, hidden }) => (
    <nav className="navbar fixed-top navbar-expand-xl navbar-dark">
    <NavLink className="navbar-brand bg-light" to='/homepage'>FG</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" exact to='/teaminfo'>Team-Info <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/teamshop'>Team-Shop<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" exact to='/sponsor'>Sponsors<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" exact to='/blog'>Blog <span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                    <ul className="right-ul navbar-nav ml-auto">
                        <li className="nav-item active">
                            { currentUser ? <div className="nav-link" onClick={() => auth.signOut()}>Sign Out<span className="sr-only">(current)</span></div>: ''}
                        </li>
                        <li className="nav-item cart-icon active">
                            { currentUser ? <CartIcon /> : '' }
                        </li>
                    </ul>
                </div>
                {hidden ? null : <CartDropdown />}
            </nav>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
