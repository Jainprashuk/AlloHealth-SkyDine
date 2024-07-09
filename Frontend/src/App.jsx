import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import OrderSucess from "./Pages/OrderSucess";
import PageNotFound from "./Pages/PageNotFound";
import StarterPage from "./Pages/StarterPage";

const App = () => {
  
  return  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/success" element={<OrderSucess />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
