import { Routes, Route } from "react-router-dom";
import Page from "./Pages/Content/Page";
import Checkout from "./Pages/Checkout/Checkout";
import { useState } from "react";

function App() {
  // Cart State declaration
  const [cartItems, setCartItems] = useState([]);

  //Function to add an item to the cart
  function addToCart(item) {
    const cartItem = { content: item };
    setCartItems((prevValues) => {
      return [...prevValues, cartItem];
    });
  }

  //Function to check if an item's id is in the cart
  function isInCart(id) {
    return cartItems.some((item) => {
      return item.content.id == id;
    });
  }

  //Function to delete an item from the cart
  function deleteFromCart(id) {
    setCartItems((prevValues) => {
      return prevValues.filter((item) => {
        return item.content.id !== id;
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
            <Page
              heading="All"
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
          path="/categories/sunscreens"
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
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />

        {/* If web user tries to go to a page that's not pre-defined, it returns the homepage back instead of throwing an error*/}
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
