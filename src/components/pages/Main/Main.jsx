import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Starting from "../../components/StartComponent.jsx/Starting";
import BlogPage from "../../Tape/BlogPage";
import TapePage from "../../Tape/TapePage";


const Main = ({switchTheme}) => {
  const User = localStorage.getItem("id");
  return (
    <>
      <div>
        <Header switchTheme={switchTheme} />
        <div className="temamain" style={{ display: "flex" }}>
          <Sidebar />
          <Starting />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
