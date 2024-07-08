import "./CheckoutButton.scss";
import PropTypes from "prop-types";

function CheckoutButton({ text }) {
  return (
    <a className="checkoutbutton" href="/checkout">
      {text}
    </a>
  );
}

CheckoutButton.propTypes = {
  text: PropTypes.string
};

export default CheckoutButton;
