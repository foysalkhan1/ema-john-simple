import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Ordered Items: {cart.lenght}</p>
        </div>
    );
};

export default Cart;