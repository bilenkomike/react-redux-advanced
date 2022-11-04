import {useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import {useSelector, useDispatch} from 'react-redux';
import {sendCartData,fetchCartData } from './store/slices/cart-actions';
let isInitial = true;


function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart =  useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);


  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect (() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed ) {
      dispatch(sendCartData(cart));
    }

    
  }, [cart, dispatch]);

  return (
    <Layout>
      {notification && <Notification {...notification}  />}
      {showCart && <Cart />}
      <Products />
      
    </Layout>
  );
}

export default App;
