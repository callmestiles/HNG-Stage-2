import "./Page.scss";
import SideNav from "../../components/SideNav/SideNav";
import Product from "../../components/Product/Product";
import NewHeader from "../../components/NewHeader/NewHeader";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Page({ heading, cartItems, add, deleteFromCart, isInCart }) {
  // States
  const [products, setProducts] = useState([]);
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Fetch products from API
  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const response = await axios.get(
  //         "/api/products?organization_id=4805b008d8d04be6a6f9591d90ebc5c5&Appid=4DJSGZ6L3MY15H0&Apikey=33b44fc83ee24e2ba6a45c2379e0872920240712123441179432"
  //       );
  //       setProducts(response.data.items);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`/api/products`, {
          params: {
            organization_id: "4805b008d8d04be6a6f9591d90ebc5c5",
            Appid: "4DJSGZ6L3MY15H0",
            Apikey: "33b44fc83ee24e2ba6a45c2379e0872920240712123441179432"
          }
        });
        setProducts(response.data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);
  // Filter products based on category
  const filteredProducts = products.filter((product) =>
    product.categories.some((category) => {
      return category.name.toLowerCase() === heading.toLowerCase();
    })
  );

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
          {filteredProducts.map((product, index) => (
            <Product
              cartItems={cartItems}
              key={index}
              product={product}
              addItem={add}
              deleteFromCart={deleteFromCart}
              isInCart={isInCart}
            />
          ))}
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
