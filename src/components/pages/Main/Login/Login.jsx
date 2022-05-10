import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../../../redux/fearutes/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reg.style.css";
import hashHead from "../../../img/hashHead.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);

  const handleChangeLogin = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSumbit = () => {
    setEmail("");
    setPassword("");
    dispatch(authUser(email, password, navigate));
    
  };
  return (
    <div className="content__login">
      <div className="login__header">
        <div className="login__header-img">
          <a href="/">
            <img src={hashHead} alt="hashHead" />
          </a>
        </div>
        <hr />
      </div>
      <div className="main__container">
        <div className="auth__container">
          {error && (
            <div className="error" style={{ color: "red" }}>
              {error}
            </div>
          )}
          <p className="textForRegLog">Авторизация</p>
          <input
            type="text"
            placeholder="Ваш E-Mail"
            autoFocus={true}
            className="form-control"
            value={email}
            onChange={handleChangeLogin}
          />
          <input
            type="password"
            placeholder="Ваш пароль"
            value={password}
            className="form-control"
            onChange={handleChangePassword}
          />
          <div className="btnPAPA">
          {loading ? (
              <div class="spinner">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </div>
            ) : (
              <button
                data-text="Awesome"
                className="btnDENI"
                onClick={handleSumbit}
              >
                <span className="actual-text">
                  &nbsp;ВОЙТИ&nbsp;
                </span>
                <span className="hover-text" aria-hidden="true">
                  &nbsp;ВОЙТИ&nbsp;
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
