import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import './Shop.css';
const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [])
    
    const handleAddCart = (product) => {
        const productToBeAdded = product.key;
        // const newCart = [...cart, product];
        // setCart(newCart);
        const sameProduct = cart.find(pd => pd.key === productToBeAdded);
        let count = 1;
        let newCart;
        if (sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== productToBeAdded);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                    {
                        products.map(pd => <Product product={pd} key={pd.key} addcart={handleAddCart} showAddToCart={true}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>  
            </div>        
        </div>
    );
};

export default Shop;