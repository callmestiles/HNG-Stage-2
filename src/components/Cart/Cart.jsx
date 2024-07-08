import "./Cart.scss";
import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import CheckBox from "../CheckBox/CheckBox";
import Charges from "../Charges/Charges";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import { useState, useEffect } from "react";

function Cart({ cartItems, close, deleteFromCart }) {
  const [productPrice, setProductPrice] = useState(0);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, cartItem) => sum + cartItem.content.price,
      0
    );
    setProductPrice(total);
  }, [cartItems]);

  function handleClose() {
    close();
  }

  function toggleCheckAll() {
    setAllChecked(!allChecked);
  }

  return (
    <div className="cart">
      <div className="cart__top">
        <h3 className="cart__heading">My cart</h3>
        <div className="cart__close" onClick={handleClose}>
          <img src="../../../public/icons/icon-cancel.svg" alt="Icon-close" />
        </div>
      </div>
      <div className="cart__middle">
        {cartItems.map((cartItem, index) => {
          return (
            <CartItem
              key={index}
              index={cartItem.id}
              product={cartItem.content.heading}
              url={cartItem.content.imgURL}
              price={cartItem.content.price}
              deleteFromCart={deleteFromCart}
              allChecked={allChecked}
            />
          );
        })}
        <div className="cart__check-all">
          <CheckBox checked={allChecked} onChange={toggleCheckAll} />
          <p className="cart__all">ALL</p>
        </div>
      </div>
      <hr className="cart__break" />
      <div className="cart__bottom">
        <Charges info="Subtotal" price={productPrice} />
        <Charges info="Shipping" price={10} />
        <Charges info="Total" price={productPrice + 10} />
      </div>
      <CheckoutButton text="Continue To Checkout" />
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  close: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired
};
export default Cart;
