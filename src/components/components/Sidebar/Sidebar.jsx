import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <span class="material-symbols-outlined">feed</span>
            <Link className="sidebar-link" to={"/post"}>
              Лента
            </Link>
          </li>
          <li className="sidebar-item">
            <span class="material-symbols-outlined">mail</span>
            <Link className="sidebar-link" to={"/messenger"}>
              Сообщения
            </Link>
          </li>
          <li className="sidebar-item">
            <span class="material-symbols-outlined">explore</span>
            <Link className="sidebar-link" to={"/popular"}>
              Популярное
            </Link>
          </li>
          <li className="sidebar-item">
            <span class="material-symbols-outlined">collections_bookmark</span>
            <Link className="sidebar-link" to={"/bookmarks"}>
              Закладки
            </Link>
          </li>
          <li className="sidebar-item">
            <span class="material-symbols-outlined">border_color</span>
            <Link className="sidebar-link" to={"/blog"}>
              Блоги
            </Link>
          </li>
          <li className="sidebar-item">
            <span class="material-symbols-outlined">info</span>
            <Link className="sidebar-link" to={"/about"}>
              О нас
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
