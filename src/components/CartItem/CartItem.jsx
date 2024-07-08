import "./CartItem.scss";
import PropTypes from "prop-types";
import CheckBox from "../CheckBox/CheckBox";
import { useState, useEffect } from "react";

function CartItem({ allChecked, index, product, price, url, deleteFromCart }) {
  const [count, setCount] = useState(1);
  const [itemChecked, setItemChecked] = useState(allChecked);

  useEffect(() => {
    setItemChecked(allChecked);
  }, [allChecked]);

  function handleSubtract() {
    setCount((prevValue) => {
      if (prevValue === 1) {
        setCount(1);
      } else {
        setCount(prevValue - 1);
      }
    });
  }

  function handleAdd() {
    setCount(count + 1);
  }

  function handleDelete() {
    deleteFromCart(index);
  }

  function handleCheckboxChange() {
    setItemChecked(!itemChecked);
  }

  return (
    <div className="cart-item">
      <CheckBox checked={itemChecked} onChange={handleCheckboxChange} />
      <div className="cart-item__img">
        <img src={url} alt="Cart-item Image" />
      </div>
      <div className="cart-item__text">
        <p className="cart-item__paragraph">{product}</p>
        <p className="cart-item__paragraph">${price}</p>
        <div className="cart-item__cta">
          <div className="cart-item__counter">
            <div className="cart-item__add" onClick={handleAdd}>
              <img src="../../../icons/icon-add.svg" alt="Icon-add" />
            </div>
            <div className="cart-item__count">
              <p>{count}</p>
            </div>
            <div className="cart-item__subtract" onClick={handleSubtract}>
              <img src="../../../icons/icon-subtract.svg" alt="Icon-subtract" />
            </div>
          </div>
          <div className="cart-item__delete" onClick={handleDelete}>
            <img src="../../../icons/icon-delete.svg" alt="Icon-delete" />
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  index: PropTypes.string.isRequired,
  allChecked: PropTypes.bool.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  deleteFromCart: PropTypes.func.isRequired
};

export default CartItem;
