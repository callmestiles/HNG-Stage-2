import "./Charges.scss";
import PropTypes from "prop-types";

function Charges({ info, price }) {
  return (
    <div className="cart-charges">
      <p className="cart-charges__info">{info}</p>
      <p className="cart-charges__price">${price}</p>
    </div>
  );
}

Charges.propTypes = {
  info: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Charges;
