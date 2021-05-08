import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
        useEffect(() => {
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart);
            const productCart =  productKeys.map(key => {
                const product = fakeData.find(pd => pd.key === key);
                product.quantity = savedCart[key];
                return product;
            } );
            setCart(productCart);
        }, []);
    return (
        <div>
            <h1>Cart Item: {cart.length} </h1>
            {
                cart.map(pd => <ReviewItem product={pd} key={pd.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;