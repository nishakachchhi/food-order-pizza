import CommonSection from "./CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./CartSlice";
import Helmet from "./Helmet";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const navigate = useNavigate();
  return (
    <Helmet title="Cart">
      <div style={{ marginBottom: "9.6rem" }}>
        <CommonSection title="Your Shooping Cart"></CommonSection>
        {cartItems.length !== 0 ? (
          <div className="container">
            <tabel className="cart-tabel ">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Food Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, i) => (
                  <BillRow item={item} key={i} />
                ))}
              </tbody>
            </tabel>
            <button className="cart-btn" onClick={() => navigate("/checkout")}>
              Checkout
            </button>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p className="empty-cart">Your cart is empty</p>
            <button className="cart-btn" onClick={() => navigate("/allfood")}>
              Go to Food Menu
            </button>
          </div>
        )}
      </div>
    </Helmet>
  );
}

function BillRow({ item }) {
  const dispatch = useDispatch();
  const deleteItemFromCart = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td>
        <img src={item.image01} alt="food-img" className="cartpage-img" />
      </td>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>{item.totalPrice}</td>
      <td>
        <button onClick={() => deleteItemFromCart(item.id)}>❌</button>
      </td>
    </tr>
  );
}

export default CartPage;
