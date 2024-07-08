import "./ShipInfo.scss";
import CheckBox from "../CheckBox/CheckBox";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

function ShipInfo() {
  return (
    <form className="ship">
      <div className="ship__group">
        <label className="ship__label">Email</label>
        <input
          className="ship__input"
          type="text"
          placeholder="xyz@gmail.com"
        />
      </div>

      <div className="ship__group ship__address">
        <label className="ship__label">Shipping Address</label>
        <input className="ship__input" type="text" placeholder="Full Name" />
        <input className="ship__input" type="text" placeholder="State" />
        <input className="ship__input" type="text" placeholder="Address" />
      </div>

      <h5 className="ship__heading">Payment Details</h5>

      <div className="ship__group">
        <label className="ship__label">Card Information</label>
        <div className="ship__input-container">
          <div className="ship__img-container">
            <img
              className="ship__img"
              src="../../../public/images/logos_visa-min.png"
              alt=""
            />
            <img
              className="ship__img"
              src="../../../public/images/uim_master-card-min.png"
              alt=""
            />
            <img
              className="ship__img"
              src="../../../public/images/fontisto_american-express-min.png"
              alt=""
            />
          </div>
          <input
            className="ship__input"
            type="text"
            placeholder="1234-1234-1234-1234"
          />
        </div>
        <div className="ship__flex">
          <input
            className="ship__input ship__flex--left"
            type="text"
            placeholder="MM / YY"
          />
          <input className="ship__input" type="text" placeholder="CVV" />
        </div>
      </div>
      <div className="ship__flex">
        <CheckBox />
        <p className="ship__bill">Billing address is the same as shipping</p>
      </div>
      <CheckoutButton text="Place Order" />
    </form>
  );
}

export default ShipInfo;
