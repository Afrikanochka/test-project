import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import authOperations from './redux/auth/auth-operations';

import Container from './components/container/Container';
import Header from './components/header/Header';
import AboutUs from './pages/aboutUs/AboutUs';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import ProductsList from './pages/products/productsList/ProductsList';
import Details from './components/details/Details';
import Cart from './components/cart/Cart';

const App = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.token);
  useEffect(() => {
  isAuth && dispatch(authOperations.getCurrentUser());
  
}, [dispatch, isAuth]);

  return (
    <Container>
    <Header />
      
      <Switch>
          <PublicRoute exact path="/" component={AboutUs} />
          <PublicRoute
            path="/signup"
            restricted
            redirectTo="/products"
            component={SignUp}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/products"
            component={Login}
          />
          <PrivateRoute
            path="/products"
            redirectTo="/login"
            component={ProductsList}
          />
          <PrivateRoute
            path="/details"
            redirectTo="/products"
            component={Details}
          />
          <PrivateRoute
            path="/cart"
            redirectTo="/products"
            component={Cart}
          />
        </Switch>
    
    </Container>
  );
}

export default App;
