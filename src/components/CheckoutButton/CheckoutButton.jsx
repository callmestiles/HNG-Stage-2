import "./CheckoutButton.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function CheckoutButton({ text, invertStyles, url }) {
  const customStyle = {
    backgroundColor: "#fff",
    color: "#14335A",
    border: "1px solid #14335A"
  };

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("fromCheckout", "true");
    navigate(url);
  };

  return (
    <button
      className="checkoutbutton"
      style={invertStyles ? customStyle : {}}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

CheckoutButton.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  invertStyles: PropTypes.bool
};

export default CheckoutButton;
