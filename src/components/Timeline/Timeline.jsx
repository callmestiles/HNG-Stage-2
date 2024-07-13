import "./Timeline.scss";
import { NavLink } from "react-router-dom";

function Timeline() {
  return (
    <div className="timeline">
      <NavLink to="/categories/all-products" className="timeline__link">
        Products
      </NavLink>
      <img
        src="/icons/icon-arrow-right-double.svg"
        className="timeline__icon"
        alt="Icon-right-double"
      />
      <div>
        <NavLink to="/categories/all-products" className="timeline__link">
          My Cart
        </NavLink>
      </div>
      <img
        src="/icons/icon-arrow-right-double.svg"
        className="timeline__icon"
        alt="Icon-right-double"
      />
      <p className="timeline__text">Checkout</p>
      <img
        src="/icons/icon-arrow-right-double.svg"
        className="timeline__icon"
        alt="Icon-right-double"
      />
    </div>
  );
}
export default Timeline;
