import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Button } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const unSign = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <div className="flexBlock">
            <div>
              <img className="logo" src={logo} alt="error" />
            </div>
            <div className="searcher_block">
              <input type="text" placeholder="Search" className="searcher" />
            </div>
          </div>
          <div className="buttons">
            <Button className="headerBtn coll">Написать</Button>
            <Button className="headerBtn coll">Пусто</Button>
              {token ? (
              <Button onClick={unSign} className="headerBtn auth">
                <Link to={"/"}>Выйти</Link>
              </Button>
            ) : (
              <Button className="headerBtn auth">
                <Link to={"/reg"}>Войти</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
