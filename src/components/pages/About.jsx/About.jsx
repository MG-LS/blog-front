import React from "react";
import "./about.css";
import img from "../img/about.png";
import Header from "../../components/Header";

const About = () => {
  return (
    <section className="aboutSection">
      <Header />
      <div className="aboutContant">
        <div className="aboutUs">
          <h3>About us</h3>
        </div>
        <div>
          <h1 className="aboutTitle">
            Helping{" "}
            <span>
              developers, and people
              <br />
              in tech
            </span>{" "}
            connect and share
            <br />
            knowledge easily
          </h1>
        </div>
        <div>
          <p className="aboutText">
            Hassle-free blogging and community experience for the creators of
            tomorrow.
          </p>
        </div>
        <div className="aboutImg">
          <img className="mapImage" src={img} alt="none" />
        </div>
      </div>
    </section>
  );
};

export default About;
