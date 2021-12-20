import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProducts } from '../../redux/product/product-operations';
import { getProducts } from '../../redux/product/product-selectors';

const initialState = {
    name: "",
    image: "",
    description: "",
    price: 0,
    isSale: false,
  };

const InputForm = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState(initialState);
   
    useEffect(() => {
        dispatch(fetchProducts)
    }, [dispatch]);

    const products = useSelector(getProducts);

    const onHandleChange = (event) => {
        const { name, value, checked, type } = event.target;
        if (type === "checkbox") {
          setState((prev) => ({ ...prev, [name]: checked }));
          return;
        }
        setState((prev) => ({ ...prev, [name]: value }));
      };
    
      const onHandleSubmit = (e) => {
        e.preventDefault();

        const product = {
            name: state.name,
            image: state.image,
            description: state.description,
            price: state.price,
        };

        dispatch(addProduct(product));
        setState(initialState)
      };

    return (
        <form onSubmit={onHandleSubmit}>
            <label>
        Name:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={state.image}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={state.price}
          onChange={onHandleChange}
        />
      </label>
      <button type="submit">Add product</button>
        </form>
    );
}

export default InputForm;