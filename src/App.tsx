import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./routes/CheckoutPage/CheckoutPage";
import ProductPage from "./routes/ProductPage/ProductPage";
import GlobalStyles from "./assets/styles/globalStyles.css";
import Navbar from "./components/Navbar/Navbar";
import { AppContainer } from "./App.css";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
