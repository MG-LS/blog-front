import React from "react";
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
    </div>
  );
};

export default Main;
