import "./ShowSales.scss";
import Product from "../Product/Product";

function ShowSales() {
  return (
    <div className="show-sales">
      <div className="show-sales__products">
        <Product
          img="../../../public/images/image 4-min.png"
          heading="Banana Boat Light As Air SPF 50+"
          amountSold="13,000"
          price="$75"
          cartImg="../../../public/icons/icon-cart-fill.svg"
          cartLike="../../../public/icons/icon-like-fill.svg"
        />
        <Product
          img="../../../public/images/image 5-min.png"
          heading="Black Girl Sunscreen SPF 30"
          amountSold="13,000"
          price="$75"
          cartImg="../../../public/icons/icon-cart.svg"
          cartLike="../../../public/icons/icon-like.svg"
        />
        <Product
          img="../../../public/images/image 7-min.png"
          heading="Supergoop Play Everyday Sunscreen SPF 50"
          amountSold="13,000"
          price="$75"
          cartImg="../../../public/icons/icon-cart.svg"
          cartLike="../../../public/icons/icon-like.svg"
        />

        <Product
          img="../../../public/images/image 11-min.png"
          heading="Supergoop Unseen Sunscreen SPF 40"
          amountSold="13,000"
          price="$75"
          cartImg="../../../public/icons/icon-cart.svg"
          cartLike="../../../public/icons/icon-like.svg"
        />
        <Product
          img="../../../public/images/image 12-min.png"
          heading="Trader Joe's Daily Facial Suncreen SPF 40"
          amountSold="13,000"
          price="$75"
          cartImg="../../../public/icons/icon-cart.svg"
          cartLike="../../../public/icons/icon-like.svg"
        />
        <Product
          img="../../../public/images/image 10-min.png"
          heading="Dr Jart+ Mineral Sunscreen SPF 50+"
          amountSold="13,000"
          price="$75"
          cartImg="../../../public/icons/icon-cart.svg"
          cartLike="../../../public/icons/icon-like.svg"
        />
      </div>
    </div>
  );
}

export default ShowSales;
