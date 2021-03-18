import React from 'react';
import Subtotal from "./Subtotal";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img
            className="checkout__ad"
            alt=""
            />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Your shopping Basket</h2>

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating} />
                ))}
                {/* CheckoutProduct */}
               
            </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
                <h2>The subtotal will go here </h2>
            </div>
        </div>
    )
}

export default Checkout
;