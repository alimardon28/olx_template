import React from "react";
import "../Home/Home.scss";
import heart from "../../assets/svg/heart.svg";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useContext(Context);
  const { setWithLove } = useContext(Context);

  return (
    <div className="home">
      <div className="container">
        <div className="home__top">
          <h1 className="home__title">PREMIUM E`LONLAR</h1>
          <ul className="home__list">
            {products?.map((item) => {
              return (
                <li className="home__item" key={item.id}>
                  <Link to={`/posts/${item.id}`} className="home__link">
                    <img src={item.imgUrl} alt="" className="home__images" />
                  </Link>
                  <Link
                    className="home__link home__links"
                    id="home__link"
                    href="#"
                  >
                    {item.address}
                  </Link>
                  <div className="home__box">
                    <div className="home__left">
                      <div className="home__left-top">
                        <span>{item.city}</span>
                        <span>{item.date}</span>
                        <span>{item.time}</span>
                      </div>
                      <p>{item.sum}</p>
                    </div>
                    <button className="home__button">
                      <img src={heart} alt="heart images" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
