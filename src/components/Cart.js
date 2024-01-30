import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "./CartSliceUi";
import { cartActions } from "./CartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  const showCart = useSelector((state) => state.cartUi.isCartVisible);
  const cartItems = useSelector((state) => state.cart.cartItem);
  const Subtotal = useSelector((state) => state.cart.totalAmount);

  return (
    <div className={`${showCart ? "show-cart" : ""}`}>
      <div className="cart">
        <button className="cart-close" onClick={toggleCart}>
          X
        </button>
        <div className="cart-list">
          {cartItems.length === 0 ? (
            <h6 className="no-items">No items present in cart</h6>
          ) : (
            cartItems.map((item, i) => <CartItem item={item} key={i} />)
          )}
        </div>
        <div className="cart-bottom">
          <p className="cart-subtotal">
            Subtotal amount:{" "}
            <span className="cart-total-price">${Subtotal}</span>
          </p>
          <button
            className="check-out-btn"
            onClick={() => {
              toggleCart();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

function CartItem({ item }) {
  const { image01, title, quantity, totalPrice, price, id } = item;
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

  const removeFromCart = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItemFromCart = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <div className="cart-item">
      <img src={image01} alt="cart-img" className="cart-item-img" />
      <div>
        <p className="cart-food-name">{title}</p>
        <p className="cart-item-summary">
          <span className="cart-quantity" style={{ fontSize: "1.6rem" }}>
            {" "}
            {quantity}x
          </span>
          <span className="cart-price">${totalPrice}</span>
        </p>
      </div>
      <div style={{ alignSelf: "center" }}>
        <button
          className="cart-close"
          style={{ fontSize: "1rem" }}
          onClick={deleteItemFromCart}
        >
          X
        </button>
      </div>
      <div>
        <button className="urinary-btn" onClick={addToCart}>
          +
        </button>
        <span className="default-quantity">{quantity}</span>
        <button className="urinary-btn" onClick={removeFromCart}>
          -
        </button>
      </div>
    </div>
  );
}

export default Cart;
