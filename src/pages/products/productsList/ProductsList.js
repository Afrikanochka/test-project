import React, { Component } from 'react'

import {ProductConsumer} from '../../../context';
import Products from '../Products';

 class ProductList extends Component {
   
    render() {
        return (
            <>    
                <div className="conatiner">
                        <ProductConsumer>
                            {(value)=>{
                                return value.products.map(product =>{
                                    return <Products key={product.id} product={product} />;
                                })
                            }}
                        </ProductConsumer>
                </div>
            </>
        );
    }
}

 

export default ProductList;