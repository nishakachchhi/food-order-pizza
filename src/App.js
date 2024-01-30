import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Allfood from "./components/Allfood";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import FoodDetails from "./components/FoodDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Heading";
import CartPage from "./components/CartPage";
import Footer from "./components/Bottom";

function App() {
  return (
    <Router>
      <Header></Header>
      <Cart />
      <Routes>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/allfood" element={<Allfood></Allfood>} />
        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
        <Route path="/fooddetails/:id" element={<FoodDetails></FoodDetails>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/regsiter" element={<Register></Register>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
