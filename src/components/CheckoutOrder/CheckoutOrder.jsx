import "./CheckoutOrder.scss";

function CheckoutOrder() {
  return (
    <div className="order">
      <div className="order__image-container">
        <img
          src="../../../images/image 4-min.png"
          alt="Product Image"
          className="order__image"
        />
      </div>
      <div className="order__text">
        <h4 className="order__heading">Banana Boat Light As Air SPF 50+</h4>
        <p>Qty 1</p>
      </div>
    </div>
  );
}

export default CheckoutOrder;
