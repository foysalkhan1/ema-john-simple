import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        debugger;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } 
    else if (total > 15) {
        shipping = 4.99
    }
    else if (total > 15) {
        shipping = 12.99
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal =(Number(tax) + total + shipping).toFixed(2);
    const formatNumber = num => {
        const precesion = num.toFixed(2)
        return Number(precesion)
    }
    return (
        <div className="cart-items">
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: $ {formatNumber(total)}</p>
            <p><small>Shipping Cost: $ {shipping}</small></p>
            <p>Tax + VAT: $ {tax}</p>
            <p>Total Price: $ {grandTotal}</p>
            <br/>
            <Link to="/review">
                <button className="main-btn">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;