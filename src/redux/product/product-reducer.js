import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { addProductError, addProductRequest, addProductSuccess, 
    changeFilter, 
    deleteProductError, deleteProductRequest, deleteProductSuccess, 
    fetchProductError, fetchProductRequest, fetchProductSuccess } from './product-actions';

const products = createReducer([], {
    [fetchProductSuccess]: (_, { payload }) => payload,
    [addProductSuccess]: (state, { payload }) => [...state, payload],
    [deleteProductSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
  })

  const loading = createReducer(false, {
    [fetchProductRequest]: () => true,
    [fetchProductSuccess]: () => false,
    [fetchProductError]: () => false,
    [addProductRequest]: () => true,
    [addProductSuccess]: () => false,
    [addProductError]: () => false,
    [deleteProductRequest]: () => true,
    [deleteProductSuccess]: () => false,
    [deleteProductError]: () => false
  })

  const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
  })

  const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchProductError]: setError,
  [addProductError]: setError,
  [deleteProductError]: setError,
});

export default combineReducers({
  products,
  filter,
  loading,
  error
});