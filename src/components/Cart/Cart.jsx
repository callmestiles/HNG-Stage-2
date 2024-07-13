import "./Cart.scss";
import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import CheckBox from "../CheckBox/CheckBox";
import Charges from "../Charges/Charges";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import { useState, useEffect, useCallback } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

function Cart({ cartItems, close, deleteFromCart }) {
  const [allChecked, setAllChecked] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [itemPrices, setItemPrices] = useState({});
  const [productPrice, setProductPrice] = useLocalStorage("productPrice", 0);

  // Initialize quantities state based on cartItems
  useEffect(() => {
    const initialQuantities = cartItems.reduce((acc, item) => {
      // Set default quantity to 1 if it doesn't exist in the state
      acc[item.content.id] = quantities[item.content.id] || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]); // Only depends on cartItems

  // Calculate total price and update local storage
  useEffect(() => {
    const total = Object.values(itemPrices).reduce(
      (sum, price) => sum + price,
      0
    );
    setProductPrice(total);
  }, [itemPrices, setProductPrice]); // Only depends on itemPrices

  // Callback for handling quantity changes
  const handleQuantityChange = useCallback((id, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity
    }));
  }, []);

  // Callback for handling price changes
  const handlePriceChange = useCallback((id, newPrice) => {
    setItemPrices((prevPrices) => ({
      ...prevPrices,
      [id]: newPrice
    }));
  }, []);

  // Handler for deleting an item from the cart
  const handleDeleteFromCart = useCallback(
    (id) => {
      deleteFromCart(id);
      setItemPrices((prevPrices) => {
        // eslint-disable-next-line no-unused-vars
        const { [id]: _, ...remainingPrices } = prevPrices;
        return remainingPrices;
      });
    },
    [deleteFromCart]
  );

  return (
    <div className="cart">
      <div className="cart__top">
        <h3 className="cart__heading">My cart</h3>
        <div className="cart__close" onClick={close}>
          <img src="/icons/icon-cancel.svg" alt="Close" />
        </div>
      </div>
      <div className="cart__middle">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.content.id}
            id={cartItem.content.id}
            product={cartItem.content.name}
            url={cartItem.content.photos[0].url}
            price={cartItem.content.current_price[0].USD[0]}
            deleteFromCart={handleDeleteFromCart}
            allChecked={allChecked}
            quantity={quantities[cartItem.content.id] || 1}
            onQuantityChange={handleQuantityChange}
            onPriceChange={handlePriceChange}
          />
        ))}
        <div className="cart__check-all">
          <CheckBox
            checked={allChecked}
            onChange={() => setAllChecked(!allChecked)}
          />
          <p className="cart__all">ALL</p>
        </div>
      </div>
      <hr className="cart__break" />
      <div className="cart__bottom">
        <Charges info="Subtotal" price={productPrice} />
        <Charges info="Shipping" price={10} />
        <Charges info="Total" price={productPrice + 10} />
      </div>
      <CheckoutButton text="Continue To Checkout" url="/checkout" />
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  close: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired
};

export default Cart;
