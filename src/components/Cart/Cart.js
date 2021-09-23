import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const total = props.cart.reduce((previous, product) => previous+ product.price,0);
    const tax = total / 10;
    const shippingCost = 30;
    const grandTotal = total + tax + shippingCost;
    return (
        <div className="cart">
            <h2 className="cart-title">{cartIcon} myCart</h2>
            <table className="cart-body">
                <tbody>
                    <tr style={{border: '1px solid red'}} className="border-b">
                        <td >Items: </td>
                        <td className="ml">{props.cart.length}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="mr">Total: </td>
                        <td className="ml">{total.toFixed(2)}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="mr">Shiping cost: </td>
                        <td className="ml">${shippingCost}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="mr">Tax: </td>
                        <td className="ml">${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="mr">Grand Total:</td>
                        <td className="ml">${grandTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <button className="place-order-btn">Place Order</button>
        </div>
    );
};

export default Cart;