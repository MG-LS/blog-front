import React from "react";
import icon from "../../img/mainphoto.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./start.css";
import Features from "./Features";
import Reviews from "./Reviews";

const Starting = () => {
  return (
    <section className="startSection">
      <div className="container">
        <div className="startBlokc">
          <div>
            <div>
              <h1>
                <span className="purple">Home</span> for tech <br />
                writers and
                <br /> readers
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                nesciunt expedita libero, in nihil ipsum omnis quis! Animi
                nesciunt quidem, exercitationem repellendus, numquam odio
                placeat aliquam amet non expedita perferendis.
              </p>
            </div>
            <div className="largeBtnBlock">
              <button className="largeBtn">Large button</button>
            </div>
          </div>
          <div className="imgMain1">
            <img className="startImg" src={icon} alt="" />
          </div>
        </div>
      </div>
      <Features />
      <Reviews />
    </section>
  );
};

export default Starting;
