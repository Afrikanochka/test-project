import React from 'react';
import { CartItemStyled } from './CartItemStyled'

const CartItem = ({item, value}) => {

    const{id,title,img,price,total,count} = item;
    const {increment, decrement,removeItem} = value;

    return (
        <CartItemStyled>
        <div className="card-info">
            <img src={img} className="card-img" alt="product"/>
        </div>
        <div className="card-info">
            product : {title}
        </div>
        <div className="card-info">
            <span className="text">price : </span>{price}
        </div>
        <div className="card-info">
            <div className="cart-btn">
                <span className="btn" onClick={()=>decrement(id)}> - </span>
                <span className="btn" >{count} </span>
                <span className="btn" onClick={()=>increment(id)}> + </span>
            </div>
        </div>
        <div className="card-info">
            <div className="cart-icon" onClick={()=>removeItem(id)}>
                <i className="trash"></i>
            </div>
        </div>
    </CartItemStyled>
    );
}

export default CartItem;
