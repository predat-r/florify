import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Home from "./pages/home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route index element={<Landing /> } ></Route>
       <Route path="/Landing" element={<Landing /> } ></Route>
       <Route path="/Home" element = {<Home />}></Route>
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
