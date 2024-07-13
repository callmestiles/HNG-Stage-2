// import { useEffect, useState } from "react";
// import "./Product.scss";
// import PropTypes from "prop-types";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Product({ product, addItem, deleteFromCart, isInCart }) {
//   const [liked, setLiked] = useState(false);
//   const [addedToCart, setAddedToCart] = useState(false);

//   //This useEffect is responsible for changing the appearance of the cart-icon on the produt, if it has been removed from the cart
//   //It checks for each product, if the id of the product is also in the cart. If yes, nothing changes but if no, it sets
//   //the addedToCart state to false and that in return will change the apperance of the cart icon.
//   useEffect(() => {
//     setAddedToCart(isInCart(product.id));
//   }, [isInCart, product.id]);

//   function handleLike() {
//     setLiked(!liked);
//   }

//   function handleCart() {
//     //If product isn't added to cart already, add it
//     if (!addedToCart) {
//       addItem(product);
//       toast.success(`${product.name} has been added to the cart!`);
//     } else {
//       deleteFromCart(product.id);
//       toast.info(`${product.name} has been removed from the cart!`);
//     }
//     setAddedToCart(!addedToCart);
//   }

//   return (
//     <div className="product" id={product.unique_id}>
//       {/* <ToastContainer /> */}
//       <div className="product__img-container">
//         <img
//           className="product__img"
//           src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
//           alt="Product image"
//         />
//         <div className="product__cart" onClick={handleCart}>
//           <img
//             src={
//               addedToCart ? "/icons/icon-cart-fill.svg" : "/icons/icon-cart.svg"
//             }
//             alt="Icon-cart"
//           />
//         </div>
//         <div className="product__like" onClick={handleLike}>
//           <img
//             src={liked ? "/icons/icon-like-fill.svg" : "/icons/icon-like.svg"}
//             alt="Icon-like"
//           />
//         </div>
//       </div>
//       <div className="product__text">
//         <h4 className="product__heading">{product.name}</h4>
//         <p className="product__amount-sold">
//           {product.available_quantity} left
//         </p>
//         <p className="product__price">${product.current_price[0].USD[0]}</p>
//       </div>
//     </div>
//   );
// }

// Product.propTypes = {
//   product: PropTypes.object.isRequired,
//   addItem: PropTypes.func.isRequired,
//   deleteFromCart: PropTypes.func.isRequired,
//   isInCart: PropTypes.func.isRequired
// };

// export default Product;

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "./Product.scss";

function Product({ product, addItem, deleteFromCart, isInCart, onImageLoad }) {
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    setAddedToCart(isInCart(product.id));
  }, [isInCart, product.id]);

  function handleLike() {
    setLiked(!liked);
  }

  function handleCart() {
    if (!addedToCart) {
      addItem(product);
      toast.success(`${product.name} has been added to the cart!`);
    } else {
      deleteFromCart(product.id);
      toast.info(`${product.name} has been removed from the cart!`);
    }
    setAddedToCart(!addedToCart);
  }

  return (
    <div className="product" id={product.unique_id}>
      <div className="product__img-container">
        <img
          className="product__img"
          src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
          alt="Product image"
          onLoad={onImageLoad} // Handle image load
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
        <h4 className="product__heading">{product.name}</h4>
        <p className="product__amount-sold">
          {product.available_quantity} left
        </p>
        <p className="product__price">${product.current_price[0].USD[0]}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired,
  onImageLoad: PropTypes.func.isRequired // Add PropType for onImageLoad
};

export default Product;
