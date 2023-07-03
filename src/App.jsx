import './App.css';
import Header from './Common/Header/Header';
import Pages from './Pages/Pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Data from './Components/Data';

import { useState } from 'react';
import Cart from './Common/Cart/Cart';
import Footer from './Common/Footer/Footer';

function App() {
  const { productItems } = Data;
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, quantity: productExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, quantity: productExit.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeItem = (product) => {
    setCartItem(cartItem.filter((item) => item.id !== product.id));
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path='/cart' exact>
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
