import React from "react";
import "../Categories/Categories.scss";
import car from "../../assets/images/caricon.jpg";
import babycar from "../../assets/images/kalaskaicon.png";
import dog from "../../assets/images/dogicon.jpg";
import kluch from "../../assets/images/kaliticon.jpg";
import kiyim from "../../assets/images/kiyimicon.jpg";
import phone from "../../assets/images/phoneicon.png";
import rolic from "../../assets/images/rolikicon.webp";
import popka from "../../assets/images/somkaicon.jpg";
import stul from "../../assets/images/images.jpg";
const Categories = () => {
  return (
    <div className="categories">
      <div className="container categories__container">
        <div className="categories__top">
          <h1 className="categories__title">Bosh toifalar</h1>
          <ul className="categories__list">
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={babycar} alt="" className="categories__img" />
                <p className="categories__desc"> Bolalar dunyosi</p>
              </a>
            </li>
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={kluch} alt="" className="categories__img" />
                <p>ko'chmas mulk</p>
              </a>
            </li>
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={car} alt="" className="categories__img" />
                <p>transport</p>
              </a>
            </li>
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={popka} alt="" className="categories__img" />
                <p> ish</p>
              </a>
            </li>
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={dog} alt="" className="categories__img" />
                <p>hayvonlar</p>
              </a>
            </li>
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={stul} alt="" className="categories__img" />
                <p className="categories__desc">uy va bog'</p>
              </a>
            </li>
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={phone} alt="" className="categories__img" />
                <p className="categories__desc">elektr jihozlari</p>
              </a>
            </li>
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={rolic} alt="" className="categories__img" />
                <p className="categories__desc">hizmatlar</p>
              </a>
            </li>
            <li className="categories__item">
              <a href="#" className="categories__link">
                <img src={kiyim} alt="" className="categories__img" />
                <p className="categories__desc">moda stil</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
