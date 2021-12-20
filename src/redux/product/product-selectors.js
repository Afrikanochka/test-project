import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.products.loading;

export const getError = state => state.products.error;

export const getProducts = state => state.products;

export const getFilter = state => state.products.filter;

export const getVisibleProducts = createSelector([getProducts, getFilter], (products, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return products.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter))

})