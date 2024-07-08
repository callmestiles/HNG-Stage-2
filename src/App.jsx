import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Page from "./Pages/Content/Page";
import Checkout from "./Pages/Checkout/Checkout";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const cartItem = { id: uuidv4(), content: item };
    setCartItems((prevValues) => {
      return [...prevValues, cartItem];
    });
  }

  function isInCart(id) {
    return cartItems.some((item) => {
      console.log(item.content.id);
      console.log(id);
      return item.content.id == id;
    });
  }

  function deleteFromCart(id) {
    setCartItems((prevValues) => {
      return prevValues.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Page
              heading="Sunscreens"
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route
          path="/categories/all-products"
          element={
            <Home
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route
          path="/categories/cleaners"
          element={
            <Page
              heading="Cleaners"
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route
          path="/categories/toners"
          element={
            <Page
              heading="Toners"
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route
          path="/categories/moisturizers"
          element={
            <Page
              heading="Moisturizers"
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route
          path="/categories/masks"
          element={
            <Page
              heading="Masks"
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route
          path="/categories/exfoilators"
          element={
            <Page
              heading="Exfoilators"
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route
          path="/categories/treatment"
          element={
            <Page
              heading="Treatment"
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="*"
          element={
            <Page
              heading="Sunscreens"
              cartItems={cartItems}
              add={addToCart}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
