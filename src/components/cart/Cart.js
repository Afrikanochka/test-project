import React from 'react';
import { ProductConsumer } from '../../context';
import CartList from './cartList/CartList';
import CartTotal from './cartTotal/CartTotal';
import EmptyCart from './emptyCart/EmptyCart'

const Cart = () => {
    return (
        <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length >0){
                            return(
                                <>                              
                               <CartList value={value}/>

                               <CartTotal value={value} />
                                </>
                            );
                        }else{
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
                
            </section>
    );
}

export default Cart;