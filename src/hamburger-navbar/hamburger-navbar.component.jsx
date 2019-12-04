import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './hamburger-navbar.styles.scss';
import { connect } from 'react-redux';
import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';


class HamburgerNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
        isActive: !prevState.isActive
      }));
    }
    render() {
        
        return (
            <div className='container-fluid hamburgernavbar-container'>
                <div className='row hamburgernavbar-container-row1'>
                    <div className='col-2 hamburgernavbar-container-col-brand'>
                        <NavLink className="navbar-brand" to='/homepage'><i className="fas fa-baseball-ball fa-sm"></i><span className='brand-span'>FG</span></NavLink>
                    </div>
                    <div className='col-1 hamburgernavbar-container-col-button'>
                        <button className='hamburgernavbar-container-row-toggler-active' onClick={this.handleClick}><i class="fas fa-align-justify fa-lg hamburger-icon"></i></button>
                    </div>
                </div>
                <div className='row hamburgernavbar-container-row2'>
                    <div className='col-12 hamburger-container-col-menuitems'>
                    { this.state.isActive ? 
                            <div className='row hamburgernavbar-container-row-menuitems-row'>
                                <div className='col hamburgernavbar-container-row-col'>
                                    
                                    <NavLink className="nav-link" to='/teamshop'>Team-Shop<span className="sr-only">(current)</span></NavLink>
                                    <NavLink className="nav-link" exact to='/sponsor'>Sponsors<span className="sr-only">(current)</span></NavLink>
                                    <NavLink className="nav-link" exact to='/blog'>Blog <span className="sr-only">(current)</span></NavLink>     
                                </div>
                                <div className='col hamburgernavbar-container-row-col2'>
                                    <ul className="navbar-nav hamburgernavbar-container-row-col2-ul">
                                        <li className='hamburgernavbar-li' style={{color: 'yellow'}}>
                                            { this.props.currentUser ? this.props.currentUser.displayName : ''}
                                        </li>
                                        <li className="hamburgernavbar-li">
                                            { this.props.currentUser ? <div className="nav-link" onClick={() => auth.signOut()}>Sign Out<span className="sr-only">(current)</span></div>: ''}
                                        </li>
                                        <li className="nav-item cart-icon active">
                                            { this.props.currentUser ? <CartIcon /> : '' }
                                        </li>
                                    </ul>
                                
                                </div>
                            </div>
                        : '' }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HamburgerNavBar);


