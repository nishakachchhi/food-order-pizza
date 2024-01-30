import Helmet from "./Helmet";
import CommonSection from "./CommonSection";
import { useSelector } from "react-redux";
import { usePDF } from "react-to-pdf";

const DELIVERY_COST = 50;

function Checkout() {
  return (
    <Helmet title="checkout">
      <CommonSection title="Checkout-Details" />
      <div className="container grid grid-2-cols mb-96">
        <CheckOutForm />
        <FinalBill />
      </div>
    </Helmet>
  );
}

function CheckOutForm() {
  const { toPDF, targetRef } = usePDF({ filename: "Food-bill.pdf" });
  const Subtotal = useSelector((state) => state.cart.totalAmount);
  return (
    <div>
      <div className="action-text">
        Fill up the below form and Download Your Bill
      </div>
      <form
        className="form container "
        style={{ width: "100%" }}
        ref={targetRef}
      >
        <div className="form-group">
          <label>Your Name</label>
          <input type="text"></input>
        </div>
        <div className="form-group">
          <label>Your Email Id</label>
          <input type="text"></input>
        </div>
        <div className="form-group">
          <label>Your Total Bill</label>
          <input
            type="text"
            value={`${Subtotal + DELIVERY_COST}$`}
            readOnly
          ></input>
        </div>
        <div className="form-group">
          <label>Paymet Type</label>
          <input type="text"></input>
        </div>
        <button
          type="submit"
          className="cart-btn"
          onClick={(e) => {
            e.preventDefault();
            toPDF();
          }}
        >
          Download Your Bill
        </button>
      </form>
    </div>
  );
}

function FinalBill() {
  const Subtotal = useSelector((state) => state.cart.totalAmount);
  const totalBill = Subtotal + DELIVERY_COST;
  return (
    <div className="bill-detail">
      <p>
        Your Food Bill : <span style={{ color: "#df2020" }}>{Subtotal}$</span>
      </p>
      <p>
        Delivery Charge :{" "}
        <span style={{ color: "#df2020" }}>{DELIVERY_COST}$</span>
      </p>
      <p>
        Your Total Bill : <span style={{ color: "#df2020" }}>{totalBill}$</span>
      </p>
    </div>
  );
}
export default Checkout;
