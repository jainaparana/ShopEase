import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();

  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product_image" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
