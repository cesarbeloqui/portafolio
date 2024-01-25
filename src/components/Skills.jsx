import meter1 from "../assets/img/meter1.svg";
import javascript from "../assets/img/javascript.png";
import node from "../assets/img/node.png";
import express from "../assets/img/express.png";
import react from "../assets/img/react.png";
import redux from "../assets/img/redux.png";
import postgres from "../assets/img/postgres.png";
import firebase from "../assets/img/firebase.png";
import sendgrid from "../assets/img/sendgrid.png";
import sequelize from "../assets/img/sequelize.png";

import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <h3>
                Tengo experiencia en el trabajo en equipo y en estas herramientas:
              </h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express JS</h5>
                </div>
                <div className="item">
                  <img src={sequelize} alt="Image" />
                  <h5>Sequelize</h5>
                </div>
                <div className="item">
                  <img src={postgres} alt="Image" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={firebase} alt="Image" />
                  <h5>Firebase Authentication</h5>
                </div>
                <div className="item">
                  <img src={sendgrid} alt="Image" />
                  <h5>SendGrid</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Image" />
                  <h5>Node JS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/*         <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
