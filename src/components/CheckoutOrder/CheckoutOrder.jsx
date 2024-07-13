import "./CheckoutOrder.scss";
import PropTypes from "prop-types";

function CheckoutOrder({ url, heading, amount }) {
  return (
    <div className="order">
      <div className="order__image-container">
        <img
          src={`https://api.timbu.cloud/images/${url}`}
          alt="Product Image"
          className="order__image"
        />
      </div>
      <div className="order__text">
        <h4 className="order__heading">{heading}</h4>
        <p>Qty {amount}</p>
      </div>
    </div>
  );
}

CheckoutOrder.propTypes = {
  url: PropTypes.string,
  heading: PropTypes.string,
  amount: PropTypes.number
};

export default CheckoutOrder;
