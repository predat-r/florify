import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import ProductContainer from "../components/ProductContainer";
import SortingBtn from "../components/SortingBtn";
import { connect } from "react-redux";
import { useState } from "react";
function Home({ products }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (products.products[0] && products.products[0].length > 0) {
      console.log(products.products[0]);
      setLoaded(true);
    }
  }, [products]);
  return loaded ? (
    <div className=" h-screen w-screen font-inter bg-background flex flex-col items-center pt-5 pl-5 pr-5 overflow-scroll">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="w-full h-full flex flex-row text-white mt-10 sm:mt-20 pl-1 sm:pl-3 pr-3 pt-3">
        <Sidebar></Sidebar>
        <div className="flex flex-col">
          <div className="flex flex-row w-full h-10 ml-3 mr-3 p-2 pt-0 justify-between">
            <h1 className="text-lg font-bold text-bars ml-4">Popular</h1>
            <SortingBtn></SortingBtn>
          </div>
          <ProductContainer products={products}></ProductContainer>
        </div>
      </div>
    </div>
  ) : (
    <div className=" h-screen w-screen font-inter bg-background flex flex-col items-center pt-5 pl-5 pr-5 overflow-scroll">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="w-full h-full flex flex-row text-white mt-10 sm:mt-20 pl-1 sm:pl-3 pr-3 pt-3">
        <Sidebar></Sidebar>
          <div className="flex flex-row w-full h-10 ml-3 mr-3 p-2 pt-0 justify-between">
            <h1 className="text-lg font-bold text-bars ml-4">Popular</h1>
            <SortingBtn></SortingBtn>
          </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Home);
