import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='row checkoutitem-page-container-row1'>
            <div className='col-2.4 checkoutitem-page-container-row1-col'>
                <div className='checkoutitem-image-container'>
                    <img src={imageUrl} className='checkoutitem-image' alt='item' />
                </div>
            </div>
            <div className='col-2.4 checkoutitem-page-container-row1-col'>
                <span className='name'>{name}</span>    
            </div>
            <div className='col-2.4 checkoutitem-page-container-row1-col'>
                <span className='quantity'>
                    <div className='arrow' onClick={() => removeItem(cartItem)}  >&#10094;</div>
                        <span className='value'>{quantity}</span>
                    <div className='arrow' onClick={() => addItem(cartItem)} >&#10095;</div>
                </span>
            </div>
            <div className='col-2.4 checkoutitem-page-container-row1-col'>
                <span className='price'>{price}</span>
            </div>
            <div className='col-2.4 checkoutitem-page-container-row1-col'>
                <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
            </div>
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);