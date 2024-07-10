import "./Page.scss";
import SideNav from "../../components/SideNav/SideNav";
import Product from "../../components/Product/Product";
import NewHeader from "../../components/NewHeader/NewHeader";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Page({ heading, cartItems, add, deleteFromCart, isInCart }) {
  //States
  const [products, setProducts] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  //This useEffect fetches the array of products returned from the products folder.
  //For each page, it finds its corresponding products array and imports it
  useEffect(() => {
    async function fetchProducts() {
      const module = await import(
        `../../products/display-${heading}-products.js`
      );
      setProducts(module.default);
    }
    fetchProducts();
  }, [heading]);

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
      {/* Conditionally render SideNav */}
      {showNav && <SideNav toggleNavShow={toggleNavShow} />}
      <NewHeader
        cartItems={cartItems}
        showCart={showCart}
        toggleCartShow={toggleCartShow}
        toggleNavShow={toggleNavShow}
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
              Filter by Category
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
          {/* Loops through the array of products imported and for each one, it passes the necessary props to the Product component */}
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
  query: PropTypes.object,
  heading: PropTypes.string,
  cartItems: PropTypes.arrayOf(PropTypes.object),
  add: PropTypes.func,
  deleteFromCart: PropTypes.func,
  isInCart: PropTypes.func
};

export default Page;
