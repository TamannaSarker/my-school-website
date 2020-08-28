import React from 'react';
import './Cart.css';
 
 
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i< cart.length; i++){
        const course = cart[i];
        total = total + course.Fee;
    }
    return (
        <div className="cart">
            <h3>Order Summery</h3>
            <h5>Total course enrolled : {cart.length} </h5>
            <h5>Total cost :${total}</h5>
            <button className="btn btn-info">Pay Here</button>
            </div>
    );
};

export default Cart;