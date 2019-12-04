import React from 'react';
import './header-responsive.styles.scss'
import NavBarLarge from '../navbar/navbar.component';
import HamburgerNavBar from '../hamburger-navbar/hamburger-navbar.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


const HeaderResponsive = ({ currentUser, hidden, displayName }) => (
        <div className='container-fluid header-responsive-content-container'>
            <div className='row header-responsive-content-row2'>
                <div className='col-12 header-responsive-content-row2-col'>
                    <span className='header-responsive-content-title'>FRANKLIN <i className="fas fa-baseball-ball fa-sm"></i> GENERALS</span>
                </div>
            </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderResponsive);

