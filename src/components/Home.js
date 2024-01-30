import { Link } from "react-router-dom";
import FoodData from "./FoodData";
import HeroImage from "../assets/images/hero.png";
import Category1 from "../assets/images/category-01.png";
import Category2 from "../assets/images/category-02.png";
import Category3 from "../assets/images/category-03.png";
import Category4 from "../assets/images/category-04.png";
import Service1 from "../assets/images/service-01.png";
import Service2 from "../assets/images/service-02.png";
import Service3 from "../assets/images/service-03.png";
import Burger from "../assets/images/hamburger.png";
import Pizza from "../assets/images/pizza.png";
import Bread from "../assets/images/bread.png";
import Helmet from "../components/Helmet";
import Location from "../assets/images/location.png";
import { useState } from "react";
import products from "../assets/fakedata/fakedata";

const Popular = [
  {
    src: Burger,
    name: "Burger",
    id: 1,
  },
  {
    src: Pizza,
    name: "Pizza",
    id: 2,
  },
  {
    src: Bread,
    name: "Bread",
    id: 3,
  },
];

function Home() {
  return (
    <Helmet title="Home">
      <HeroSection></HeroSection>
      <div className="container grid grid-4-cols mb-96">
        <CategoryDetails imagePath={Category1} foodName="Fastfood" />
        <CategoryDetails imagePath={Category2} foodName="Pizza" />
        <CategoryDetails imagePath={Category3} foodName="Asian Food" />
        <CategoryDetails imagePath={Category4} foodName="Row Meat" />
      </div>
      <Features />
      <PopularFood />
      <SectionWhy />
      <BestFood />
    </Helmet>
  );
}

function HeroSection() {
  return (
    <div className="container grid grid-2-cols mb-96">
      <div>
        <p className="hero-text">Easy way to make an order</p>
        <h1 className="hero-heading">
          <span className="heading-span">Hungry?</span>Just wait food at{" "}
          <span className="heading-span">your door</span>
        </h1>
        <p
          className="hero-text"
          style={{ color: "#888", marginBottom: "2.4rem" }}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div style={{ marginBottom: "2.4rem" }}>
          <Link className="hero-link order-link">Order now &gt; </Link>
          <Link className="hero-link allfood-link">See all foods</Link>
        </div>
        <div className="heading-details">
          <p>
            <span className="heading-icon">✔</span> 100% Secure Checkout
          </p>
          <p>
            <span className="heading-icon">✖</span> No Shopping Charge
          </p>
        </div>
      </div>
      <div>
        <img src={HeroImage} alt="hero-img" className="hero-img" />
      </div>
    </div>
  );
}

function CategoryDetails({ imagePath, foodName }) {
  return (
    <div className="category-div">
      <img src={imagePath} alt={foodName} />
      <span>{foodName}</span>
    </div>
  );
}

function Features() {
  return (
    <div className="mb-96">
      <div className="feature-div mb-96">
        <span className="feature-span">What we serve</span>
        <h2 className="feature-heading">
          Just sit back at home we will{" "}
          <span style={{ color: "#df2022" }}> take care</span>
        </h2>
        <p className="feature-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et
          est, fugiat repudiandae neque illo delectus commodi magnam explicabo
          autem voluptates eaque velit.
        </p>
      </div>
      <div className="container grid grid-3-cols">
        <FeatureBox imagePath={Service1} heading="Quick Delivery" />
        <FeatureBox imagePath={Service2} heading="Super Dine In" />
        <FeatureBox imagePath={Service3} heading="Easy Pick Up" />
      </div>
    </div>
  );
}

function FeatureBox({ imagePath, heading }) {
  return (
    <div className="feature-div">
      <img src={imagePath} alt={heading} className="featutre-img" />
      <h3 className="Feature-box-heading">{heading}</h3>
      <p className="feature-box-text">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et
        est, fugiatre
      </p>
    </div>
  );
}

function PopularFood() {
  const [btnId, setBtnId] = useState(0);
  const [product, setProduct] = useState(products);
  function onSetCategory(name) {
    const filterData = products.filter((item) => item.category === name);
    setProduct(filterData);
  }

  return (
    <div className="popular-box container">
      <h3 className="popular-heading">Popular Foods</h3>
      <div className="popular-tab">
        <button
          className={`popular-btn ${btnId === 0 ? "select-btn" : ""}`}
          onClick={() => {
            setBtnId(0);
            setProduct(products);
          }}
        >
          All
        </button>
        {Popular.map((item, i) => (
          <button
            key={i}
            className={`popular-btn ${btnId === item.id ? "select-btn" : ""}`}
            onClick={() => {
              setBtnId(item.id);
              onSetCategory(item.name);
            }}
          >
            <img src={item.src} alt={item.name} className="popular-tab-img" />
            {item.name}
          </button>
        ))}
      </div>
      <div className="grid grid-4-cols mb-96">
        {product.map((item, i) => (
          <FoodData item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

function SectionWhy() {
  return (
    <div
      className="container grid  grid-2-cols"
      style={{ marginBottom: "4.8rem" }}
    >
      <img src={Location} alt="loaction" className="Delivery-img" />
      <div>
        <h2 className="why-heading">Why Tasty Treat?</h2>
        <p className="why-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et
          est, fugiat repudiandae neque illo delectus commodi magnam explicabo
          autem voluptates eaque velit vero facere mollitia.
        </p>
        <ul className="why-list">
          <Speciality>Fresh and tasty foods</Speciality>
          <Speciality>Quality support</Speciality>
          <Speciality>Order from any location</Speciality>
        </ul>
      </div>
    </div>
  );
}

function Speciality({ children }) {
  return (
    <li>
      <p className="special-text">
        <span style={{ color: "#df2020" }}>✔</span> {children}
      </p>
      <p className="special-text " style={{ fontWeight: "normal" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </li>
  );
}

function BestFood() {
  return (
    <div className="best-selling container mb-96">
      <h3 className="best-heading">Best Selling Food</h3>
      <div className="grid grid-4-cols">
        {products.slice(0, 4).map((item, i) => (
          <FoodData item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
