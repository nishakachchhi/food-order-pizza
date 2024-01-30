import CommonSection from "./CommonSection";
import Helmet from "./Helmet";
import products from "../assets/fakedata/fakedata";
import FoodData from "./FoodData";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function Allfood() {
  const [searchFood, setSearchFood] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;

  const filterArray = products.filter((food) =>
    food.title.toLowerCase().includes(searchFood.toLowerCase())
  );
  const filterSlice = filterArray.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(filterArray.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All-Food">
      <CommonSection title={"All Foods"}></CommonSection>
      <div className="container mb-96">
        <input
          type="text"
          placeholder="I'm looking for..."
          className="search-field"
          value={searchFood}
          onChange={(e) => {
            setSearchFood(e.target.value);
            setPageNumber(0);
          }}
        ></input>

        <div className="grid grid-4-cols">
          {filterSlice.map((item, i) => (
            <FoodData item={item} key={i} />
          ))}
        </div>
        <div>
          {pageCount ? (
            <ReactPaginate
              className="paginationBttns"
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel="prev"
              nextLabel="next"
            ></ReactPaginate>
          ) : (
            ""
          )}
        </div>
      </div>
    </Helmet>
  );
}

export default Allfood;
