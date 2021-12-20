import axios from 'axios';
import { addProductError, addProductRequest, addProductSuccess, deleteProductError, deleteProductRequest, deleteProductSuccess, fetchProductError, fetchProductRequest, fetchProductSuccess } from './product-actions';

export const fetchProducts = () => dispatch => {
    dispatch(fetchProductRequest());
    axios.get('/products')
      .then(({ data }) => dispatch(fetchProductSuccess(data)))
      .catch(error => dispatch(fetchProductError(error.message)));
  }
  
  export const addProduct = (product) => dispatch => {
    
  
    dispatch(addProductRequest());
  
    axios.post('/contacts', product)
      .then(({ data }) => dispatch(addProductSuccess(data)))
      .catch(error => dispatch(addProductError(error.message)));
  }
  
  export const deleteProduct = productId => dispatch => {
    dispatch(deleteProductRequest());
    axios.delete(`/products/${productId}`)
      .then(() => dispatch(deleteProductSuccess(productId)))
      .catch(error => dispatch(deleteProductError(error.message)));
  }