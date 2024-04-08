import React from "react";
import "./assets/css/style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./latout/Header";
import Footer from "./latout/Footer";
import Main from "./latout/Main";
import Company from "./components/Company";
import Product from "./components/Product";
import Community from "./components/Community";
import { vData } from "./data";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main vData={vData} />} />{" "}
        {/* // object 형태로 받은것 */}
        <Route path="/com" element={<Company />} />
        <Route path="/pro/:item" element={<Product vData={vData} />} />{" "}
        {/* // props 형태로 받은것 */}
        <Route path="/comm" element={<Community />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
