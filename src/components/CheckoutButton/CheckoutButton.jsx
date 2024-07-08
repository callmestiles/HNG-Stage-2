import "./CheckoutButton.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function CheckoutButton({ text }) {
  return (
    <NavLink to="/checkout" className="checkoutbutton">
      {text}
    </NavLink>
  );
}

CheckoutButton.propTypes = {
  text: PropTypes.string
};

export default CheckoutButton;
