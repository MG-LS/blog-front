import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../../redux/fearutes/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reg.style.css";
import hashHead from "../../../img/hashHead.jpeg";
import { useNavigate } from "react-router-dom";

const Reg = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();
  const handleChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const handleChangeLogin = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSumbit = () => {
    setEmail("");
    setNickname("");
    setPassword("");

    dispatch(createUser(email, password, nickname, navigate));
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
          <p className="textForReg">CНАЧАЛА НУЖНО ЗАРЕГИСТРИРОВАТЬСЯ</p>
          <input
            type="text"
            placeholder="Придумайте ник"
            className="form-control"
            value={nickname}
            onChange={handleChangeNickname}
          />
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
                  &nbsp;ЗАРЕГИСТРИРОВАТЬСЯ&nbsp;
                </span>
                <span className="hover-text" aria-hidden="true">
                  &nbsp;ЗАРЕГИСТРИРОВАТЬСЯ&nbsp;
                </span>
              </button>
            )}
          </div>
          <a className="aforLog" href="/login">
            <p className="textForReg">Но у тебя уже есть аккаунт?</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reg;
