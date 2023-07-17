import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { CssBaseline } from '@material-ui/core';
import {commerce} from './lib/commerce';
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import ProductView from './components/ProductView/ProductView';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { fetchProduct } from './redux/action/bookDataAction';
import { fetchCart, addCart,updateCart,deleteCart,emptyCart } from './redux/action/cartDataAction';



  const App = () => {

    const products = useSelector(state=> state.bookList.bookList.data)
    const cart = useSelector((state)=>state.cartList.cartDataList)
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

  
     //Function to Add the Item in a cart
     const handleAddToCart = async (productId, quantity) => {
      dispatch(addCart(productId, quantity))
    };
  
  //Function to Update the Item in a cart
    const handleUpdateCartQty = async (lineItemId, quantity) => {
      dispatch(updateCart(lineItemId, { quantity }))
    };

    //Function to Remove the Item in a cart
    const handleRemoveFromCart = async (lineItemId) => {
       dispatch(deleteCart(lineItemId))
    };
  
    //Function to Empty the Item in a cart
    const handleEmptyCart = async () => {
     dispatch(emptyCart())
    };
  

    //useEffect used to dispatch the two
    useEffect(() => {
      dispatch(fetchProduct())
      dispatch(fetchCart())
    }, []);
  
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  
    return (
      <div>
      <Router>
        <div style={{ display: 'flex' }}>
          <CssBaseline />
          <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
          <Switch>
            <Route exact path="/">
              <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
            </Route>
            <Route path="/checkout" exact>
            </Route>
            <Route path="/product-view/:id" exact>
              <ProductView />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  };
  
  export default App;
  