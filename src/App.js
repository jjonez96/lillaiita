import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/navbar.css";
import SideBar from "./components/Sidebar";
import Header from "./pages/Header";
import "./assets/styles/header.css";
import "./assets/styles/main.css";
import Main from "./pages/Main";

const App = () => {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Header />
      <Main />
      <div id="page-wrap">
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
        <h1>Click to show menu</h1>
      </div>
    </div>
  );
};
export default App;
