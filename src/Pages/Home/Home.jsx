import "./Home.scss";
import products from "../../products";
import SideNav from "../../components/SideNav/SideNav";
import Product from "../../components/Product/Product";
import NewHeader from "../../components/NewHeader/NewHeader";
import { useState } from "react";
import PropTypes from "prop-types";

function Home({ cartItems, add, deleteFromCart, isInCart }) {
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
    <section className={`home ${showCart && "home--cart-open"}`}>
      {showNav && <SideNav toggleNavShow={toggleNavShow} />}
      <NewHeader
        cartItems={cartItems}
        showCart={showCart}
        toggleCartShow={toggleCartShow}
        closeCart={closeCart}
        deleteFromCart={deleteFromCart}
      />
      <div className={`home__content ${showNav && "home__content--nav-open"}`}>
        <div className="home__text">
          <h1 className="home__heading">All Products</h1>
          <div
            className={`home__filter ${showNav && "home__filter--nav-open"}`}
            onClick={toggleNavShow}
          >
            <p
              className={`home__filter-text ${
                showNav && "home__filter-text--nav-open"
              }`}
            >
              Filter
            </p>
            <img
              src={
                showNav
                  ? "../../icons/icon-filter-active.svg"
                  : "../../icons/icon-filter.svg"
              }
              alt="Filter-button"
            />
          </div>
        </div>

        <div className={`home__products ${showNav && "home__products--open"}`}>
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
        <div className="home__page">
          <p className="home__page-num">1</p>
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
  add: PropTypes.func,
  deleteFromCart: PropTypes.func,
  isInCart: PropTypes.func
};

export default Home;
