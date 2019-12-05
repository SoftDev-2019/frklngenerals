import React from 'react';
import './cart-icon-mobile.styles.scss';
import { ReactComponent as ShoppingIcon } from '../Images/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cart.actions';
import { selectCartItemsCount } from '../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartIconMobile = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon-mobile'>
        <ShoppingIcon  className='shopping-icon-mobile' />
        <span className='item-count-mobile'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIconMobile);