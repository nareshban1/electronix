import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./routes/CheckoutPage/CheckoutPage";
import ProductPage from "./routes/ProductPage/ProductPage";
import GlobalStyles from "./assets/styles/globalStyles.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
