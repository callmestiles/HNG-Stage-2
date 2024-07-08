import "./Checkout.scss";
import NewHeader from "../../components/NewHeader/NewHeader";
import Charges from "../../components/Charges/Charges";
import Timeline from "../../components/Timeline/Timeline";
import Break from "../../components/Break";
import CheckoutOrder from "../../components/CheckoutOrder/CheckoutOrder";
import ShipInfo from "../../components/ShipInfo/ShipInfo";

function Checkout() {
  return (
    <div className="checkout">
      <NewHeader />

      <div className="checkout__timeline">
        <Timeline text="Products" />
        <Timeline text="My Cart" />
        <Timeline text="Checkout" />
        <p className="checkout__complete">Order Complete</p>
      </div>

      <Break />

      <div className="content">
        <div className="content__cart-info">
          <h4 className="content__info">My Order</h4>
          <Break />
          <CheckoutOrder />
          <Break />
          <CheckoutOrder />
          <Break />
          <div className="content__price">
            <Charges info="Subtotal" price="150" />
            <Charges info="Shipping" price="10" />
            <Charges info="Total" price="160" />
          </div>
        </div>
        <div className="content__ship-info">
          <h4 className="content__info">Shipping Information</h4>
          <ShipInfo />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
