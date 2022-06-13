import React from "react";
import "../Header/Header.scss";
import { Link , NavLink } from "react-router-dom";
import logo from "../../assets/svg/olxLogo.png";
import chat from "../../assets/svg/chat.svg";
import heart from "../../assets/svg/heart.svg";
import contact from "../../assets/svg/person.svg";
import hamburger from "../../assets/images/menu_icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="header__navbar">
          <NavLink className="header__navbar_link" to="/">
            <img src={logo} alt="olx logo images" />
          </NavLink>
          <ul className="header__list">
            <li className="header__hamburger__menyu">
              <img src={hamburger} alt="hamburger images" />
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                <span>Uzb</span> |<span>Rus</span>
              </a>
            </li>
            <li className="header__item header__d-block">
              <a href="#" className="header__link">
                <i className="bi bi-chat"></i>
                <p>Xabarlar</p>
              </a>
            </li>
            <li className="header__item header__d-block">
              <a href="#" className="header__link">
                <div className="header__heartb0x">
                  <i className="bi bi-heart"></i>
                  <span>0</span>
                </div>
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                <i className="bi bi-person"></i>
                <select
                  name="select"
                  id="header__select"
                  className="header__select"
                >
                  <option value="">Mening profilim</option>
                  <option value="">e'lonlar</option>
                  <option value="">to'lov va olx xisobi</option>
                  <option value="">sozlamalar</option>
                  <option value="">nomzod profili</option>
                </select>
              </a>
            </li>
            <li className="header__item">
              <button href="#" className="header__button">
                E'lon berish
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
