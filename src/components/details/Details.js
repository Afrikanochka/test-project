import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import {DetailsBtnStyled} from './DetailsBtnStyled'; 

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                  const{id, company,img,info,price, title,inCart} = value.detailProduct;
                  return(
                      <div className="container">
                              <div className="title">
                                  <h1>{title}</h1>
                              </div>        
                              <div className="img">
                                  <img src={img} className="img-fuild" alt="product" height="350px"/>
                              </div>
                              
                              <div className="title">
                                  <h3>model:{title}</h3>
                                  <h4 className="text-title">
                                      made by:<span className="text-uppercase">
                                          {company}

                                      </span>
                                  </h4>
                                  <h4 className="text-pink">
                                      <strong>price : <span>$</span>{price}</strong>
                                  </h4>
                                  <p className="text-info"> 
                                  Some information about the product

                                  </p>
                                  <p className="text-info">{info}</p>
                                  
                                  <div>
                                      <Link to="/">
                                          <DetailsBtnStyled>Back to Products</DetailsBtnStyled>
                                      </Link>

                                      <DetailsBtnStyled cart
                                       disabled={inCart ? true : false}
                                      onClick={()=>{
                                          value.addToCart(id);
                                          value.openModal(id);

                                      }}
                                      >
                                          {inCart ? 'inCart' :"add to cart"}
                                      </DetailsBtnStyled>

                                  </div>

                              </div>
                      </div>
                  )
               }}
           </ProductConsumer>
        )
    }
}