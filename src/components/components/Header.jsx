import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Button, DropdownButton } from "react-bootstrap";
import logo from "../img/logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WeatherApp from "./profile/Weather/WeatherApp";
import Example from "./Canvas";
import { Dropdown } from "react-bootstrap";
import { fetchOneUser, fetchUsers } from "../../redux/fearutes/user";

const Header = () => {

  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchOneUser());
  }, [dispatch]);


  const users = useSelector((state) => state.users.users);
  const unSign = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const filteredNames = users.filter((item) => {
    return item.nickname.includes(value);
  });


  return (
    <>
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
                <input
                  type="text"
                  placeholder="Search"
                  className="searcher"
                  onChange={handleChange}
                  value={value}
                />
              </div>
            </div>
            <div className="buttons">
              <DropdownButton
                id="dropdown-basic-button"
                title="Dropdown button"
              >
                <Dropdown.Item href="#/action-1">
                  <Example />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Текст</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Текст</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Текст</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Текст</Dropdown.Item>
              </DropdownButton>
              <div className="coll">
                <Example />
              </div>
              <Button className="headerBtn coll">Написать</Button>
              <Button className="headerBtn coll">Пусто</Button>

              {token ? (
                <Button className="headerBtn prof">
                  <Link to={`/profile/${id}`}>Профиль</Link>{" "}
                </Button>
              ) : null}

              {id ? (
                <Link to={`/profile/${id}`}>
                  <Button className="headerBtn coll">Профиль</Button>
                </Link>
              ) : null}

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
      </header>
      {value && (
        <div className="modalw">
          {filteredNames.map((item) => {
            return (
              <Link className="linkToUser" to={`/user/${item.id}`}>
                <div className="finderUsers">
                  <h3 className="userName">{item.nickname}</h3>
                  <div>
                    <img
                      className="finderImg"
                      src={`http://localhost:8000/${item.img}`}
                      alt="none"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Header;
