import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightGray',
        marginBottom: '10px',
        paddingBottom: '10px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quanity: {quantity}</p>
            <p><small>${price}</small></p>
            <button className="main-btn" onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;