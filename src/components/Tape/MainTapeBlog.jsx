import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import BlogPage from "./BlogPage";

const MainTapeBlog = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
        <div className="tape_user">
          <BlogPage />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainTapeBlog;
