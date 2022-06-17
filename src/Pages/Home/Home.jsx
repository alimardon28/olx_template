import React from "react";
import "../Home/Home.scss";
import heart from "../../assets/svg/heart.svg";
import heartFill from "../../assets/svg/heart-fill.svg";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  const { products } = useContext(Context);
  const { setWithLove } = useContext(Context);
  console.log(products);

  const hanleClick = (e) => {
    let id = e.target.id;
    products?.map((item) => {
      if (item.id == id) {
        item.addSaved = !item.addSaved;
        window.localStorage.setItem("products", JSON.stringify(products));
        if (item.addSaved) {
          setWithLove((state) => [...state, item]);
          window.localStorage.setItem("products", JSON.stringify(products));
        } else {
          setWithLove((state) =>
            state.filter((element) => element.id !== item.id)
          );
        }
      }
    });
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home__top">
          <h1 className="home__title">PREMIUM E`LONLAR</h1>
          <ul className="home__list">
            {products?.map((item) => {
              console.log(item.id);
              return (
                <li className="home__item" key={item.id}>
                  <NavLink to={`/posts/${item.id}`} className="home__link">
                    <img src={item.imgUrl} alt="" className="home__images" />
                  </NavLink>

                  <a
                    className="home__link home__links"
                    id="home__link"
                    href="#"
                  >
                    {item.address}
                  </a>
                  <div className="home__box">
                    <div className="home__left">
                      <div className="home__left-top">
                        <span>{item.city}</span>
                        <span>{item.date}</span>
                        <span>{item.time}</span>
                      </div>
                      <p>{item.sum}</p>
                    </div>
                    <button
                      className="home__button"
                      id={item.id}
                      onClick={(e) => hanleClick(e)}
                      data-id={item.id}
                    >
                      <img
                        id={item.id}
                        src={item.addSaved ? heartFill : heart}
                        alt="heart images"
                      />
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
