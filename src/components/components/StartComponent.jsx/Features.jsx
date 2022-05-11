import React from "react";

const Features = () => {
  return (
    <div className="features">
      <link
        rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <h2 className="features-title">
        ВОЗМОЖНОСТИ, КОТОРЫЕ ДЕЛАЮТ ВЕДЕНИЕ БЛОГА <span>ИНТЕРЕСНЕЕ</span>
      </h2>
      <div className="features-list">
        <div className="feature">
          <span class="material-symbols-outlined">login</span>
          <div>
            <h4>Авторизация</h4>
            <p>Возможность авторизоваться и вести собственный блог</p>
          </div>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">open_in_full</span>
          <div>
            <h4>Адаптив</h4>
            <p>
              Дизайн, адаптированный под экраны любого (более-менее) устройства
            </p>
          </div>
        </div>
        <div className="feature">
          <span class="material-symbols-outlined">home_repair_service</span>
          <div>
            <h4>MERN</h4>
            <p>
              Использованы самые актуальные на данный момент инструменты
              веб-разработчика
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
