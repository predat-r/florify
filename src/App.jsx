import React from "react";
import { BrowserRouter, Routes, Route, resolvePath } from "react-router-dom";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />}></Route>
            <Route path="/Landing" element={<Landing />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
