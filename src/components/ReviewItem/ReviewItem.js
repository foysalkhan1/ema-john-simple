import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightGray',
        marginBottom: '10px',
        paddingBottom: '10px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quanity: {quantity}</p>
            <button className="main-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;