import React from "react";
import "../SearchBar/Search.scss";
import search from "../../assets/svg/search.svg";
import gio from "../../assets/svg/gio.svg";

const Search = () => {
  return (
    <div className="search">
      <div className="container">
        <div className="search__searchBox">
          <div className="search__box">
            <img src={search} alt="" />
            <input
              type="text"
              required
              placeholder="elon qidiruv"
              className="search__input"
              id="search__input"
            />
          </div>
          <div className="search__location">
            <img src={gio} alt="gio images" />
            <select className="search__select" name="" id="">
              <option value="">Toshkent vil</option>
              <option value="">Qashqadaryo</option>
              <option value="">Surxondaryo</option>
              <option value="">Buxoro</option>
              <option value="">Toshkent sh</option>
              <option value="">Andijon</option>
              <option value="">Samarqand</option>
              <option value="">Farg'ona</option>
            </select>
          </div>
          <button className="search__qidiruvBtn">
            Qidiruv
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
