import "./Checkout.scss";
import NewHeader from "../../components/NewHeader/NewHeader";
import Charges from "../../components/Charges/Charges";
import Timeline from "../../components/Timeline/Timeline";
import Break from "../../components/Break";
import CheckoutOrder from "../../components/CheckoutOrder/CheckoutOrder";
import CheckoutButton from "../../components/CheckoutButton/CheckoutButton";
import ShipInfo from "../../components/ShipInfo/ShipInfo";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Checkout({ cartItems }) {
  //States
  const [orderComplete, setOrderComplete] = useState(false);
  const [productPrice, setProductPrice] = useState(0);

  function handleOrder() {
    setOrderComplete(true);
  }

  //This useEffects calculates the sum of all the prices of all the items in the cart.
  //When it's done, it sets the result to the state productPrice
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, cartItem) => sum + cartItem.content.price,
      0
    );
    setProductPrice(total);
  }, [cartItems]);

  return (
    <div className={`checkout ${orderComplete && "checkout--order-complete"}`}>
      <NewHeader isCheckOutPage="true" />

      <div className="checkout__timeline">
        <Timeline />
        <p className="checkout__complete">Order Complete</p>
      </div>

      <Break />

      <div className="content">
        <div className="content__cart-info">
          <h4 className="content__info">My Order</h4>
          <Break />
          {/* Maps through all the items in cartItems and for each one, it passes the necessary props to the CheckoutOrder component */}
          {cartItems.map((cartItem, index) => {
            return (
              <CheckoutOrder
                key={index}
                url={cartItem.content.imgURL}
                heading={cartItem.content.heading}
              />
            );
          })}
          <div className="content__price">
            <Charges info="Subtotal" price={productPrice} />
            <Charges info="Shipping" price={10} />
            <Charges info="Total" price={productPrice + 10} />
          </div>
        </div>
        <div className="content__ship-info">
          <h4 className="content__info">Shipping Information</h4>
          <ShipInfo />
          <button onClick={handleOrder} className="content__checkout">
            Checkout
          </button>
          <button
            onClick={handleOrder}
            className="content__checkout content__checkout--invert"
          >
            Checkout with transfer
          </button>
        </div>
      </div>
      {/* Comditionally render a div if orderComplete is true */}
      {orderComplete && (
        <div className="order-complete">
          <p className="order-complete__img">🎉</p>
          <h4 className="order-complete__heading">Your order is complete!</h4>
          <p className="order-complete__paragraph">
            You will be receiving an email with your order details and
            information soon.
          </p>
          <CheckoutButton text="Continue Shopping" url="/" />
        </div>
      )}
    </div>
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object)
};

export default Checkout;
