import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Starting from "../../components/StartComponent.jsx/Starting";
import BlogPage from "../../Tape/BlogPage";
import TapePage from "../../Tape/TapePage";

const Main = () => {
  const User = localStorage.getItem("id");
  return (
    <>
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Starting />
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Main;
