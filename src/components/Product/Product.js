import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={props.product.img} alt="" />
            </div>
            <div className='product-name'>
                <h4>{props.product.name}</h4>
                <p><small>by: {props.product.seller}</small></p>
                <p>${props.product.price}</p>
                <p><small>onyly {props.product.stock} left in store. Order Soon</small></p>
                <button className='main-btn' onClick={() => props.addcart(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;