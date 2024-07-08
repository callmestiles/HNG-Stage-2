import "./SideNav.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function SideNav({ toggleNavShow }) {
  function toggleNav() {
    toggleNavShow();
  }

  return (
    <div className="side-nav">
      <div className="nav-container">
        <div className="nav__top">
          <h2 className="nav__heading">Category</h2>
          <div className="nav__close" onClick={toggleNav}>
            <img src="../../icons/icon-cancel-2.svg" alt="Icon-cancel" />
          </div>
        </div>

        <nav>
          <ul className="nav">
            <li className="nav__item">
              <NavLink to="/categories/all-products" className="nav__link">
                All Products
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/categories/cleaners" className="nav__link">
                Cleansers
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/categories/toners" className="nav__link">
                Toners
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/categories/moisturizers" className="nav__link">
                Moisturizers
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/categories/masks" className="nav__link">
                Masks
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/categories/sunscreens" className="nav__link">
                Sunscreens
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/categories/exfoilators" className="nav__link">
                Exfoilators
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/categories/treatment" className="nav__link">
                Treatments
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

SideNav.propTypes = {
  toggleNavShow: PropTypes.func.isRequired
};
export default SideNav;
