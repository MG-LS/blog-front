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

  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const handleChangeLogin = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSumbit = () => {
    dispatch(createUser(email, password));
    setEmail("");
    setPassword("");
    if (!error) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
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
            <button className="btnDENI" onClick={handleSumbit}>
              <span>ЗАРЕГИСТРИРОВАТЬСЯ</span>
            </button>
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
