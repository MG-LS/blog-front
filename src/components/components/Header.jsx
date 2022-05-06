import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Button } from "react-bootstrap";
import logo from "../img/logo.png";

const Header = () => {
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
            <Button className="headerBtn auth">Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
