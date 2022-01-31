import React from "react";
import Kynnet from "./pages/Kynnet";
import Footer from "./pages/Footer";
import SideBar from "./components/Sidebar";
import Header from "./pages/Header";
import "./assets/styles/sidebar.css";
import "./assets/styles/header.css";
import "./assets/styles/kynnet.css";
import "./assets/styles/footer.css";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Kynnet" element={<Kynnet />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
