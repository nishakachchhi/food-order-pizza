import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logoImage from "../assets/images/res-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "./CartSliceUi";

const navLinks = [
  {
    path: "/home",
    page: "Home",
  },
  {
    path: "/allfood",
    page: "Foods",
  },
  {
    path: "/cart",
    page: "Cart",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className={`header ${isOpen ? "nav-open" : ""} container`}>
      <div style={{ textAlign: "center" }}>
        <img className="logo" alt="brand-logo" src={logoImage} />
        <p className="nav-text">Tast Treat</p>
      </div>
      <nav className="main-nav">
        <div className="main-nav-list">
          {navLinks.map((item, i) => (
            <NavLink
              to={item.path}
              className="main-nav-link"
              key={i}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              {item.page}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="header-icons">
        <FiShoppingBag
          className="header-icon"
          onClick={toggleCart}
        ></FiShoppingBag>
        <span className="heading-quantity">{quantity}</span>
        <AiOutlineUser className="header-icon"></AiOutlineUser>
      </div>

      <button
        className="btn-mobile-nav"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <AiOutlineBars
          className="icon-mobile-nav"
          name="menu-outline"
        ></AiOutlineBars>
        <AiOutlineClose
          className="icon-mobile-nav"
          name="close-outline"
        ></AiOutlineClose>
      </button>
    </header>
  );
}

export default Header;
