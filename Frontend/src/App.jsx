import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlacedOrder from "./pages/PlacedOrder/PlacedOrder";
import Footer from "./components/Footer/Footer";
import LogingPopup from "./components/LogingPopup/LogingPopup";
import { useState } from "react";

const App = () => {
  const [showlogin, setShowlogin] = useState(false);

  return (
    <>
      {showlogin ? <LogingPopup setShowlogin={setShowlogin} /> : <></>}
      <div className="app">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placed-order" element={<PlacedOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
