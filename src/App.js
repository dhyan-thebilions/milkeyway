import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MilkyWay from "./components/MilkyWay";
import Cards from "./components/Cards";
import DownloadMilkyWay from "./components/DownloadMilkyWay";
import CopyRight from "./components/CopyRight";
import 'bootstrap/dist/css/bootstrap.min.css';
import "reactstrap/lib";

function App() {
  return (
    <>
      <NavBar />
      <MilkyWay />
      <Cards />
      <DownloadMilkyWay />
      <CopyRight />
    </>
  );
}

export default App;
