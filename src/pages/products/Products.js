import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';

import { ProductsStyled } from './ProductsStyled';

 class Products extends Component {
    render() {
        const{id,title,img,price,inCart} = this.props.product;
        return (
           <ProductsStyled>
               <div className="card">
                   <ProductConsumer>
                       {(value)=>(
                           <div className="img-container" onClick={()=> value.handleDetail(id)}>
                           <Link to="/details">
                               <img src={img} alt="product_image" className="card-img"  />
                           </Link>
                           <button className="cart-btn" 
                           disabled={inCart ? true : false} 
                           onClick={()=>{
                               value.addToCart(id);
                               value.openModal(id);
                           }}>
                               {inCart?(
                               <p className="text" disabled> in cart
                               </p>):(<i className="text-btn" />)}   
                           </button>   
                      </div>
                       )}  
                   </ProductConsumer>
                   <div className="card-footer">
                      <p className="title">{title}</p>
                    <p className="price">${price}</p>
                   </div>
               </div>
           </ProductsStyled>
        )
    }
}



export default Products;