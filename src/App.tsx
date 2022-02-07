import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./routes/CheckoutPage/CheckoutPage";
import ProductPage from "./routes/ProductPage/ProductPage";
import GlobalStyles from "./assets/styles/globalStyles.css";
import Navbar from "./components/Navbar/Navbar";
import { AppContainer } from "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        {cart.length !== 0 && (
          <Route path="/checkout" element={<CheckoutPage />} />
        )}
        <Route path="*" element={<ProductPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
