import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Starting from "../../components/StartComponent.jsx/Starting";
import BlogPage from "../../Tape/BlogPage";
import TapePage from "../../Tape/TapePage";

const Main = () => {
  const User = localStorage.getItem("id");
  return (
    <>
      {!User ? (
        <div>
          <Header />
          <div style={{ display: "flex" }}>
            <Sidebar />
            <Starting />
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <Sidebar />
          <div className="tape_user">
          
            <BlogPage />
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
