import React from "react";
import "../Favoirite/Favoirite.scss";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import heart from "../../assets/svg/heart.svg";
import { Link, NavLink } from "react-router-dom";
import heartFill from "../../assets/svg/heart-fill.svg";
import ProductsPages from "../ProductsPages/ProductsPages";

const Favoirite = () => {
  const { withLove, setWithLove } = useContext(Context);

  const hanleClick = (id) => {
    setWithLove((state) => state.filter((element) => element.id !== id));
    alert(`Saralanganlardan o'chirasizmi?`);
  };

  return (
    <div>
      {withLove.length == 0 ? (
        <ProductsPages />
      ) : (
        <div>
          <div className="favoirite">
            <div className="container">
              <ul className="favoirite__list">
                {withLove?.map((item) => {
                  return (
                    <li className="favoirite__item" key={item.id}>
                      <NavLink
                        to={`/posts/${item.id}`}
                        className="favoirite__link"
                      >
                        <img
                          src={item.imgUrl}
                          alt=""
                          className="favoirite__images"
                        />
                      </NavLink>

                      <a
                        className="favoirite__link favoirite__links"
                        id="favoirite__link"
                        href="#"
                      >
                        {item.address}
                      </a>
                      <div className="favoirite__box">
                        <div className="favoirite__left">
                          <div className="favoirite__left-top">
                            <span>{item.city}</span>
                            <span>{item.date}</span>
                            <span>{item.time}</span>
                          </div>
                          <p>{item.sum}</p>
                        </div>
                        <button
                          className="favoirite__button"
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
      )}
    </div>
  );
};

export default Favoirite;
