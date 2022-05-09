import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Example from "./Canvas";
import { Button } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const token = useSelector(state => state.auth.token)
  const navigate = useNavigate()

  const unSign = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

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
            {token ? <Button onClick={unSign} className="headerBtn"><Link to={'/'}>Выйти</Link></Button> : <Button className="headerBtn"><Link to={'/blog'}>Блог</Link></Button>}
            {token ? <Button onClick={unSign} className="headerBtn"><Link to={'/'}>Выйти</Link></Button> : <Button className="headerBtn"><Link to={'/reg'}>Войти</Link></Button>}
             
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
