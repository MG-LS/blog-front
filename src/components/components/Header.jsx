import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Example from "./Canvas";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row header__inner">
          <div className="col-md-3">LOGO</div>
          <div className="col-md-3 searcher_block">
            <input type="text" placeholder="Search" className="searcher" />
            <Button className="headerBtn">Написать</Button>
          </div>
          <div className="col-md-2">
            <Example className="col-md-1" />
          </div>
          <div className="col-md-2">
            <div>
              <Button>Войти</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
