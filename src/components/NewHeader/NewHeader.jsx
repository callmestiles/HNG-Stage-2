import "./NewHeader.scss";
import PropTypes from "prop-types";
import Cart from "../Cart/Cart";

function NewHeader({
  cartItems,
  showCart,
  toggleCartShow,
  closeCart,
  deleteFromCart
}) {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo-container">
          <img src="../../icons/logo.svg" alt="Logo" className="header__logo" />
        </div>
        <form className="header__form form">
          <button className="form__button" />
          <input type="text" className="form__input" placeholder="Search" />
        </form>
        <div className="header__search">
          <img src="../../icons/icon-search.svg" alt="Icon-search" />
        </div>
      </div>

      <div className="header__icon-container">
        <div className="header__icon--big" onClick={toggleCartShow}>
          <img src="../../icons/icon-cart-added.svg" alt="Icon-cart-added" />
        </div>
        <div className="header__icon--small" onClick={toggleCartShow}>
          <img src="../../icons/icon-cart-small.svg" alt="Icon-cart-added" />
        </div>
      </div>

      {showCart && (
        <Cart
          cartItems={cartItems}
          close={closeCart}
          deleteFromCart={deleteFromCart}
        />
      )}
    </header>
  );
}

NewHeader.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  showCart: PropTypes.bool.isRequired,
  toggleCartShow: PropTypes.func.isRequired,
  closeCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired
};

export default NewHeader;
