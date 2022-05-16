import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Starting from "../../components/StartComponent.jsx/Starting";

const Main = () => {
  return (
    <div>
      <Header />
      <div style={{"display": "flex"}}>
        <Sidebar />
        <Starting />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
