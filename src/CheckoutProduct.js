import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, price, title, rating }) {
  const [, dispatch] = useStateValue();

  function handleRemove(id) {
    dispatch({ type: "Remove", payload: id });
  }
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image" // Add this class
        src={image}
        alt="CheckoutProduct_image"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={() => handleRemove(id)}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
