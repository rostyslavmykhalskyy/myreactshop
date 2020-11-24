import React from "react";
import ss2019 from "../assets/pictures/collection3.min.jpg";
import paris2020 from "../assets/pictures/collection.min.jpg";
import promQueen2019 from "../assets/pictures/collection2.min.jpg";

const Home = () => {
  return (
    <>
      <section className="welcome">
        <div className="card">
          <div className="card__title">
            <h2>SS 2020</h2>
          </div>
          <div className="card__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="card__actions">
            <button>explore</button>
          </div>
        </div>
      </section>
      <section className="collections">
        <h2>Our best collections</h2>
        <div className="collections__cards">
          <div className="card--collections">
            <div className="card--collections__picture">
              <img src={ss2019} alt="" />
            </div>
            <div
              className="card--collections__content"
              style={{ backgroundColor: "#FBD2B2" }}
            >
              <h2 className="card--collections__title">
                SS
                <br />
                2019
              </h2>
              <div className="card__actions">
                <button>Explore</button>
              </div>
            </div>
          </div>
          <div className="card--collections">
            <div className="card--collections__picture">
              <img src={paris2020} alt="" />
            </div>
            <div
              className="card--collections__content f-order-negative"
              style={{ backgroundColor: "#929292" }}
            >
              <h2 className="card--collections__title">
                paris
                <br />
                2020
              </h2>
              <div className="card__actions">
                <button>Explore</button>
              </div>
            </div>
          </div>
          <div className="card--collections single-card">
            <div className="card--collections__picture">
              <img src={promQueen2019} alt="" />
            </div>
            <div
              className="card--collections__content f-order-negative"
              style={{ backgroundColor: "#F5907C" }}
            >
              <h2 className="card--collections__title">
                prom queen
                <br /> 2019
              </h2>
              <div className="card__actions">
                <button>Explore</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
