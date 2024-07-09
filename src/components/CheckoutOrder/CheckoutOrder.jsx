import "./CheckoutOrder.scss";
import PropTypes from "prop-types";

function CheckoutOrder({ url, heading }) {
  return (
    <div className="order">
      <div className="order__image-container">
        <img src={url} alt="Product Image" className="order__image" />
      </div>
      <div className="order__text">
        <h4 className="order__heading">{heading}</h4>
        <p>Qty 1</p>
      </div>
    </div>
  );
}

CheckoutOrder.propTypes = {
  url: PropTypes.string,
  heading: PropTypes.string
};

export default CheckoutOrder;
