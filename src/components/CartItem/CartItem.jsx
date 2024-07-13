import "./CartItem.scss";
import PropTypes from "prop-types";
import CheckBox from "../CheckBox/CheckBox";
import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

function CartItem({
  allChecked,
  id,
  product,
  price,
  url,
  deleteFromCart,
  onQuantityChange,
  onPriceChange
}) {
  const [itemChecked, setItemChecked] = useState(allChecked);
  const [quantity, setQuantity] = useLocalStorage(
    `cart-item-${id}-quantity`,
    1
  );

  useEffect(() => {
    setItemChecked(allChecked);
  }, [allChecked]);

  useEffect(() => {
    onPriceChange(id, price * quantity);
  }, [id, price, quantity, onPriceChange]);

  function handleSubtract() {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(id, newQuantity);
      onPriceChange(id, price * newQuantity);
    }
  }

  function handleAdd() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(id, newQuantity);
    onPriceChange(id, price * newQuantity);
  }

  function handleDelete() {
    onPriceChange(id, 0);
    deleteFromCart(id);
  }

  function handleCheckboxChange() {
    setItemChecked(!itemChecked);
  }

  return (
    <div className="cart-item">
      <div className="cart-item__checkbox">
        <CheckBox checked={itemChecked} onChange={handleCheckboxChange} />
      </div>
      <div className="cart-item__img">
        <img
          src={`https://api.timbu.cloud/images/${url}`}
          alt="Cart-item Image"
        />
      </div>
      <div className="cart-item__text">
        <p className="cart-item__paragraph">{product}</p>
        <p className="cart-item__paragraph">${price * quantity}</p>
        <div className="cart-item__cta">
          <div className="cart-item__counter">
            <div className="cart-item__add" onClick={handleAdd}>
              <img src="/icons/icon-add.svg" alt="Icon-add" />
            </div>
            <div className="cart-item__count">
              <p>{quantity}</p>
            </div>
            <div className="cart-item__subtract" onClick={handleSubtract}>
              <img src="/icons/icon-subtract.svg" alt="Icon-subtract" />
            </div>
          </div>
          <div className="cart-item__delete" onClick={handleDelete}>
            <img src="/icons/icon-delete.svg" alt="Icon-delete" />
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  allChecked: PropTypes.bool.isRequired,
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired
};

export default CartItem;
