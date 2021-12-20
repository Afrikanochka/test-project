import React from 'react'
import {Link} from 'react-router-dom';
import PaypalButton from '../../paypalButton/paypalButton';

import { CartTotalStyled } from './CartTotalStyled'

const CartTotal = ({value}) => {

    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;

    return (
        <CartTotalStyled>
        <div className="container">
                <Link to="/">
                    <button className="btn" type="button" 
                    onClick={()=>clearCart()} >clear cart
                    </button>
                </Link>
                <h5 className="text">
                    <span>subtotal : </span>
                    <strong>$ {cartSubTotal}</strong>
                </h5>
                <h5 className="text">
                    <span>tax: </span>
                    <strong>$ { cartTax}</strong>
                </h5>
                <h5 className="text">
                    <span>total : </span>
                    <strong>$ {cartTotal}</strong>
                </h5>
                {/* <PaypalButton  total={cartTotal} clearCart={clearCart} /> */}
        </div>
    </CartTotalStyled>  
    );
}

export default CartTotal;