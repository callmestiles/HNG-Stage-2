import { useEffect, useState } from "react";
import "./Product.scss";
import PropTypes from "prop-types";

function Product({ product, addItem, isInCart }) {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  //This useEffect is responsible for changing the appearance of the cart-icon on the produt, if it has been removed from the cart
  //It checks for each product, if the id of the product is also in the cart. If yes, nothing changes but if no, it sets
  //the addedToCart state to false and that in return will change the apperance of the cart icon.
  useEffect(() => {
    setAddedToCart(isInCart(product.id));
  }, [isInCart, product.id]);

  function handleLike() {
    setLiked(!liked);
  }

  function handleCart() {
    //If product isn't added to cart already, add it
    if (!addedToCart) {
      addItem(product);
    }
    setAddedToCart(!addedToCart);
  }

  return (
    <div className="product" id={product.id}>
      <div className="product__img-container">
        <img
          className="product__img"
          src={product.imgURL}
          alt="Product image"
        />
        <div className="product__cart" onClick={handleCart}>
          <img
            src={
              addedToCart ? "/icons/icon-cart-fill.svg" : "/icons/icon-cart.svg"
            }
            alt="Icon-cart"
          />
        </div>
        <div className="product__like" onClick={handleLike}>
          <img
            src={liked ? "/icons/icon-like-fill.svg" : "/icons/icon-like.svg"}
            alt="Icon-like"
          />
        </div>
      </div>
      <div className="product__text">
        <h4 className="product__heading">{product.heading}</h4>
        <p className="product__amount-sold">13,000 sold</p>
        <p className="product__price">$75</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired
};

export default Product;
