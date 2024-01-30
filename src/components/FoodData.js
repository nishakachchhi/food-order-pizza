import { useDispatch } from "react-redux";
import { cartActions } from "./CartSlice";
import { NavLink } from "react-router-dom";

function FoodData({ item, setNavId }) {
  const { id, title, image01, price } = item;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  return (
    <div className="food-box">
      <NavLink to={`/fooddetails/${id}`}>
        <img src={item.image01} alt={item.name} className="food-img" />
      </NavLink>
      <h4 className="food-title">{item.title}</h4>
      <div className="food-price-box">
        <span className="food-price">${item.price}</span>
        <button className="cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodData;
