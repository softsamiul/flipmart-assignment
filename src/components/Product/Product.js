import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const handleCart = props.handleCart;
    const {name, img, stock, price, seller} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="single-product-wrapper">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-title">{name}</h4>
                <p><small>By: {seller}</small></p>
                <h3>${price}</h3>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                <button onClick={()=>handleCart(props.product)}  className="add-to-cart-btn">{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;