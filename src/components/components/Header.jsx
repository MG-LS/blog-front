import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Example from "./Canvas";
import { Button } from "react-bootstrap";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <header className="row">
      <div className="container col-8">
        <div className="row header__inner">
          <div className="col-md-8 flexBlock">
            <div>
              <img className="logo" src={logo} alt="error" />
            </div>
            <div className="searcher_block">
              <input type="text" placeholder="Search" className="searcher" />
            </div>
          </div>
          <div className="col-md-4 my-2  buttons">
            <Button className="headerBtn">Написать</Button>
            <Button className="headerBtn">Пусто</Button>
            <Button className="headerBtn">Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
