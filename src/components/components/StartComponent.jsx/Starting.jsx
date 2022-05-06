import React from "react";
import { Button } from "react-bootstrap";
import icon from "../../img/mainphoto.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./start.css";

const Starting = () => {
  return (
    <section className="startSection">
      <div className="row container">
        <div className="row startBlokc">
          <div className="col-md-6">
            <div>
              <h1>
                <span className="purple">Home</span> for tech <br />
                writes and
                <br /> readers
              </h1>
            </div>
            <div className="row">
              <p className="col-md-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                nesciunt expedita libero, in nihil ipsum omnis quis! Animi
                nesciunt quidem, exercitationem repellendus, numquam odio
                placeat aliquam amet non expedita perferendis.
              </p>
            </div>
            <div>
              <Button variant="primary" size="lg">
                Large button
              </Button>
            </div>
          </div>
          <div className="col-md-6 imgMain1">
            <img style={{ maxWidth: "500px" }} src={icon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Starting;
