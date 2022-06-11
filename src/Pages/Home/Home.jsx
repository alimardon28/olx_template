import React from "react";
import "../Home/Home.scss";
import car from "../../assets/images/caricon.jpg";
import heart from "../../assets/svg/heart.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__top">
          <h1 className="home__title">PREMIUM E`LONLAR</h1>
          <ul className="home__list">
            <li className="home__item">
              <a href="#" className="home__link">
                <img src={car} alt="" className="home__images" />
              </a>
              <a className="home__link home__links" id="home__link" href="#">
                Дача сдается
              </a>
              <div className="home__box">
                <div className="home__left">
                  <div className="home__left-top">
                    <span>Chorvoq</span>
                    <span>Kecha 13:54</span>
                  </div>
                  <p>1 500 000 so’m</p>
                </div>
                <button className="home__button">
                  <img src={heart} alt="heart images" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
