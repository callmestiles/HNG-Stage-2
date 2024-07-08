import "./Page.scss";
import products from "../../display-products.js";
import SideNav from "../../components/SideNav/SideNav";
import Product from "../../components/Product/Product";
import NewHeader from "../../components/NewHeader/NewHeader";
import { useState } from "react";
import PropTypes from "prop-types";

function Page({ heading, cartItems, add, deleteFromCart, isInCart }) {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function toggleCartShow() {
    setShowCart(!showCart);
  }

  function closeCart() {
    setShowCart(false);
  }

  function toggleNavShow() {
    setShowNav(!showNav);
  }

  return (
    <section className={`page ${showCart && "page--cart-open"}`}>
      {showNav && <SideNav toggleNavShow={toggleNavShow} />}
      <NewHeader
        cartItems={cartItems}
        showCart={showCart}
        toggleCartShow={toggleCartShow}
        closeCart={closeCart}
        deleteFromCart={deleteFromCart}
      />
      <div className={`page__content ${showNav && "page__content--nav-open"}`}>
        <div className="page__text">
          <h1 className="page__heading">{heading}</h1>
          <div
            className={`page__filter ${showNav && "page__filter--nav-open"}`}
            onClick={toggleNavShow}
          >
            <p
              className={`page__filter-text ${
                showNav && "page__filter-text--nav-open"
              }`}
            >
              Filter
            </p>
            <img
              src={
                showNav
                  ? "../../../icons/icon-filter-active.svg"
                  : "../../../icons/icon-filter.svg"
              }
              alt="Filter-button"
            />
          </div>
        </div>

        <div className={`page__products ${showNav && "page__products--open"}`}>
          {products.map((product, index) => {
            return (
              <Product
                cartItems={cartItems}
                key={index}
                product={product}
                addItem={add}
                isInCart={isInCart}
              />
            );
          })}
        </div>
        <div className="page__page">
          <p className="page__page-num">1</p>
        </div>
      </div>
    </section>
  );
}

Page.propTypes = {
  heading: PropTypes.string,
  cartItems: PropTypes.arrayOf(PropTypes.object),
  add: PropTypes.func,
  deleteFromCart: PropTypes.func,
  isInCart: PropTypes.func
};

export default Page;
