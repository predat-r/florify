import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import ProductContainer from "../components/ProductContainer";
import SortingBtn from "../components/SortingBtn";
import { connect } from "react-redux";
import { useState } from "react";
import { cardio, mirage } from "ldrs";
import { asyncGetProducts } from "../actions";
import PageSelector from "../components/pageSelector";

function Home({ products, getProducts }) {
  const [productList, setProductList] = useState([]);
  const CardsPerPage = 25;
  const [ThispageProducts, setThisPageProducts] = useState([]);
  const [numOfPages, setnumOfPages] = useState(0);
  const [numOfProducts, setnumOfProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  mirage.register();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (products.products[0] && products.products[0].length > 0) {
      setProductList(products.products[0]);

      setLoaded(true);
    }
  }, [products]);
  useEffect(() => {
    setThisPageProducts(productList.slice(0, CardsPerPage));
  }, [productList]);
  useEffect(() => {
    setnumOfProducts(productList.length);
  }, [productList]);
  useEffect(() => {
    setnumOfPages(numOfProducts / CardsPerPage);
  }, [numOfProducts, productList]);
  useEffect(() => {
    const startIndex = (currentPage - 1) * CardsPerPage;
    const endIndex = startIndex + CardsPerPage;
    // Update the products for the current page
    if (loaded) {
      setThisPageProducts(productList.slice(startIndex, endIndex));
    }
  }, [currentPage, productList]);
  useEffect(() => {
    if (!loaded) {
      getProducts();
    }
  }, []);
  const sortProducts = (sortBy) => {
    let sortedList = [...productList];

    switch (sortBy) {
      case "1":
        getProducts();
        break;
      case "2":

        sortedList.sort((a, b) => a.price - b.price);
        setProductList(sortedList);
        break;
      case "3":

        sortedList.sort((a, b) => b.price - a.price);
        setProductList(sortedList);
      default:
        break;
    }

  };
  return loaded ? (
    <div className=" h-screen w-screen font-inter bg-background flex flex-col items-center pt-5 pl-5 pr-5 overflow-scroll relative">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="w-full h-full flex flex-row text-white mt-10 sm:mt-20 pl-1 sm:pl-3 pr-3 pt-3 ">
        <Sidebar></Sidebar>
        <div className="flex flex-col">
          <div className="flex flex-row w-full h-10 ml-3 mr-3 p-2 pt-0 justify-between">
            <h1 className="text-lg font-bold text-bars ml-4">Popular</h1>
            <SortingBtn sortResults={sortProducts}></SortingBtn>
          </div>
          <div className="flex flex-col justify-center items-center  w-full pb-8 box-border mb-10 flex-shrink-0 ">
            <ProductContainer products={ThispageProducts}></ProductContainer>
            <PageSelector
              numOfPages={numOfPages}
              setPage={setCurrentPage}
            ></PageSelector>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className=" h-screen w-screen font-inter bg-background flex flex-col items-center pt-5 pl-5 pr-5 overflow-scroll">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="w-full h-full flex flex-row text-white mt-10 sm:mt-20 pl-1 sm:pl-3 pr-3 pt-3">
        <Sidebar></Sidebar>
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-row w-full h-10 ml-3 mr-3 p-2 pt-0 justify-between">
            <h1 className="text-lg font-bold text-bars ml-4"></h1>
            <SortingBtn></SortingBtn>
          </div>
          <div className="flex flex-col h-2/3 w-full justify-center items-center">
            <l-mirage size="120" speed="2.5" color="#008F51"></l-mirage>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
});
const mapdispatchToprops = (dispatch) => ({
  getProducts: () => dispatch(asyncGetProducts()),
});
export default connect(mapStateToProps, mapdispatchToprops)(Home);
