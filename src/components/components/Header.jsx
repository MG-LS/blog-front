import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Button } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.auth.token);


  const unSign = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.reload()
  };

  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <div className="flexBlock">
            <Link to={"/"}>
              <div>
                <img className="logo" src={logo} alt="error" />
              </div>
            </Link>
            <div className="searcher_block">
              <input type="text" placeholder="Search" className="searcher" />
            </div>
          </div>

          <div className="col-md-4 my-2  buttons">
            <Button className="headerBtn">Написать</Button>
            <Button className="headerBtn">Пусто</Button>
            {token ? <Button onClick={unSign} className="headerBtn"><Link to={'/'}>Выйти</Link></Button> : <Button className="headerBtn"><Link to={'/blog'}>Блог</Link></Button>}
            {token ? <Button onClick={unSign} className="headerBtn"><Link to={'/'}>Выйти</Link></Button> : <Button className="headerBtn"><Link to={'/reg'}>Войти</Link></Button>}
             

          <div className="buttons">
            <Button className="headerBtn coll">Написать</Button>
            <Button className="headerBtn coll">Пусто</Button>
            <Button className="headerBtn prof">Профиль</Button>
            {token ? (
              <Link to={"/"}>
                <Button onClick={unSign} className="headerBtn auth">
                  Выйти
                </Button>
              </Link>
            ) : (
              <Link to={"/reg"}>
                <Button className="headerBtn auth">Войти</Button>
              </Link>
            )}

          </div>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
