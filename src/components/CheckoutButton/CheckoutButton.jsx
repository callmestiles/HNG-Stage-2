import "./CheckoutButton.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function CheckoutButton({ text, invertStyles }) {
  const customStyle = {
    backgroundColor: "#fff",
    color: "#14335A",
    border: "1px solid #14335A"
  };
  return (
    <NavLink
      to="/checkout"
      className="checkoutbutton"
      style={invertStyles && customStyle}
    >
      {text}
    </NavLink>
  );
}

CheckoutButton.propTypes = {
  text: PropTypes.string,
  invertStyles: PropTypes.bool
};

export default CheckoutButton;
