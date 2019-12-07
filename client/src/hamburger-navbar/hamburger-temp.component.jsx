import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './hamburger-temp.styles.scss';
import { connect } from 'react-redux';
import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';



class HamburgerTemp extends Component {
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
            <div className='container-fluid hamburgertemp-container'>
               <div className='row hamburgertemp-container-row1'>
                   <div className='col-6 hamburgertemp-container-row1-col1'>
                        <NavLink className="navbar-brand hamburgertemp-brand" to='/homepage'><i className="fas fa-baseball-ball fa-sm"></i><span className='hamburgertemp-brand-span'>FG</span></NavLink>
                   </div>
                   <div className='col-6 hamburgertemp-container-row1-col2'>
                        <span className='hamburgertemp-displayname'>{ this.props.currentUser ? this.props.currentUser.displayName : ''}</span>
                        <button className='hamburgertemp-button' onClick={this.handleClick}><i class="fas fa-align-justify fa-lg hamburgertemp-icon"></i></button>
                   </div>
               </div>
               { this.state.isActive ? 
                <div className='row hamburgertemp-container-row2'>
                    <div className='col-12 hamburgertemp-container-row2-col1'>
                        <NavLink className="nav-link" to='/teamshop' onClick={this.handleClick}>Team-Shop<span className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-link" exact to='/sponsor' onClick={this.handleClick}>Sponsors<span className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-link" exact to='/blog' onClick={this.handleClick}>Blog <span className="sr-only">(current)</span></NavLink>  
                        { this.props.currentUser ? <div className="nav-link" onClick={() => auth.signOut()}>Sign Out<span className="sr-only">(current)</span></div>: ''}
                        <span className='hamburgertemp-carticon-span' onClick={this.handleClick}>{ this.props.currentUser ? <CartIcon /> : '' }</span>
                    </div>
                </div>
               : '' }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(HamburgerTemp);


