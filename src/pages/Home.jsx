import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import ProductContainer from "../components/ProductContainer";
import SortingBtn from "../components/SortingBtn";
function Home() {
  return (
    <div className=" h-screen w-screen font-inter bg-background flex flex-col items-center pt-5 pl-5 pr-5 overflow-scroll">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <div className="w-full h-full flex flex-row text-white mt-10 sm:mt-20 pl-1 sm:pl-3 pr-3 pt-3" >
        <Sidebar></Sidebar>
        <div className="flex flex-col">
          <div className="flex flex-row w-full h-full ml-3 mr-3 p-2 pt-0 justify-between">
            <h1 className="text-lg font-bold text-bars ml-4">Popular</h1>
            <SortingBtn></SortingBtn>
          </div>
        <ProductContainer></ProductContainer>
        </div>
      </div>
    </div>
  );

  
{/*       
          <ProductCard></ProductCard>
        </ProductContainer>
      </div>  */}
}

export default Home;
