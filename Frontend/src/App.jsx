import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlacedOrder from "./pages/PlacedOrder/PlacedOrder";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placed-order" element={<PlacedOrder />} />
      </Routes>
    </div>
  );
};

export default App;
