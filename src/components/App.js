import React from "react";
import Kynnet from "../pages/Kynnet";
import Footer from "../pages/Footer";
import Navbar from "./Nav/Navbar";
import Header from "../pages/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Kynnet" element={<Kynnet />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
