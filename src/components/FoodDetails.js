import CommonSection from "./CommonSection";
import Helmet from "./Helmet";
import products from "../assets/fakedata/fakedata";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "./CartSlice";

function FoodDetails() {
  const { id } = useParams();
  const findProduct = products.find((food) => food.id === id);
  return (
    <>
      <Helmet title="Food-Detail" />
      <CommonSection title={findProduct.title} />
      <FoodData />
      <DescriptionReview />
      <ReviewForm />
    </>
  );
}

function FoodData() {
  const { id } = useParams();
  const findProduct = products.find((food) => food.id === id);
  const [previewImg, setPreviewImg] = useState(findProduct.image01);
  const { title, image01, price } = findProduct;
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
    <div className="food-detail-div container mb-96">
      <div className="product-images">
        <div
          className="img-item"
          onClick={() => setPreviewImg(findProduct.image01)}
        >
          <img src={findProduct.image01} alt="" className="food-100" />
        </div>
        <div
          className="img-item"
          onClick={() => setPreviewImg(findProduct.image02)}
        >
          <img src={findProduct.image02} alt="" className="food-100" />
        </div>
        <div
          className="img-item"
          onClick={() => setPreviewImg(findProduct.image03)}
        >
          <img src={findProduct.image03} alt="" className="food-100" />
        </div>
      </div>
      <div>
        <img src={previewImg} alt="" className="food-80" />
      </div>
      <div>
        <h2 className="product-title">{findProduct.title}</h2>
        <p className="product-price">
          Price:<span>${findProduct.price}</span>
        </p>
        <p className="category">
          Category: <span>{findProduct.category}</span>
        </p>
        <button className="cart-btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function DescriptionReview() {
  const [tab, setTab] = useState("des");
  const { id } = useParams();
  const findProduct = products.find((food) => food.id === id);

  return (
    <div className="container">
      <div className="tabs">
        <h6
          className={tab === "des" ? "tab-active" : ""}
          onClick={() => setTab("des")}
        >
          Description
        </h6>
        <h6
          className={tab === "rev" ? "tab-active" : ""}
          onClick={() => setTab("rev")}
        >
          Review
        </h6>
      </div>
      {tab === "des" ? (
        <div className="tab-content">
          <p>{findProduct.desc}</p>
        </div>
      ) : (
        <div className="review">
          <p className="user-name">Dhruvi</p>
          <p className="user-email">dhruvi@gmail.com</p>
          <p className="feedback-text">Great Product</p>
        </div>
      )}
    </div>
  );
}

function ReviewForm() {
  return (
    <form className="form container mb-96" style={{ width: "60%" }}>
      <div className="form-group">
        <input type="text" placeholder="Enter Your Name"></input>
      </div>
      <div className="form-group">
        <input type="email" placeholder="Enter Your Email"></input>
      </div>

      <div className="form-group">
        <textarea
          rows={5}
          type="text"
          placeholder="Write Your Review"
        ></textarea>
      </div>
      <button type="submit" className="cart-btn">
        Submit
      </button>
    </form>
  );
}
export default FoodDetails;
