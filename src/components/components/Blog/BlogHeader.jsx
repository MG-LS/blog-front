import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Blog/blog.css";
import { Button } from "react-bootstrap";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogHeader = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const unSign = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="header_blog">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <Button className="headerBtn">Публикации</Button>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
