import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart]= useState([]);
    useEffect(()=>{
        fetch('./products.Json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
console.log(product);

    const handleCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <main id="main-section">
            {/* Shop section start */}
            <section className="shop-container">
                {
                    product.map(product => <Product handleCart={handleCart} key={product.key} product={product}></Product>)
                }
            </section>
            {/* Cart section start */}
            <section className="cart-container">
                <Cart cart={cart}></Cart>
            </section>
        </main>
    );
};

export default Shop;