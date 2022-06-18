import React from "react";
import "../SingliProducts/SingliProducts.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../Context/Context";
import SearchBar from "../../Components/SearchBar/Search";
import heart from "../../assets/svg/heart.svg";
import heartFill from "../../assets/svg/heart-fill.svg";
import contacts from "../../assets/images/contacts.png";
import gio from "../../assets/svg/gio.svg";
import location from "../../assets/svg/location.svg";

const SingliProducts = () => {
  const date = useParams();

  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${date.productId}`)
      .then((response) => response.json())
      .then((data) => setDataProducts(data));
  }, []);

  return (
    <div className="singliProducts">
      <SearchBar />
      <div className="container singliProducts__container">
        <div className="singliProducts__div">
          <div className="singliProducts__box">
            <div className="singliProducts__left">
              <div className="singliProducts__divs">
                {dataProducts?.imagesUrl?.map((images) => {
                  return (
                    <div className="singliProducts__left__imagesBox">
                      <img
                        className="singliProducts__left__imagesBox_img"
                        src={images.thumbnail}
                        alt=""
                      />
                      <img
                        className="singliProducts__left__imagesBox_img"
                        src={images.imagesThumbnail}
                        alt=""
                      />
                    </div>
                  );
                })}

                <div className="singliProducts__left__elements">
                  <div className="singliProducts__left__elements-top">
                    <h2 className="singliProducts__left__elements_title">
                      {dataProducts.title}
                    </h2>
                    <button className="singliProducts__left__elements-top_button">
                      <img src={heart} alt="heart images" />
                    </button>
                  </div>
                  <span className="singliProducts__left__elements_span">{dataProducts.sum}</span>
                  <h3 className="singliProducts__left__elements_title">
                    TAVSIF
                  </h3>
                  <p className="singliProducts__left__elements_desc">
                    {dataProducts.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="singliProducts__right">
              <div className="singliProducts__right_top">
                <h3 className="singliProducts__right_top-title">
                  FOYDALANUVCHI
                </h3>
                <div className="singliProducts__right_top-number">
                  <img src={contacts} alt="img" />
                  <span>{dataProducts.phone}</span>
                </div>
                <div className="singliProducts__right_top-button">
                  <button>Qo`ng`iroq qilish</button>
                  <button>Xabar yozish</button>
                </div>
              </div>
              <div className="singliProducts__right_top_bottom">
                <h3 className="singliProducts__right_top_bottom-title">
                  JOYLASHUV
                </h3>
                <div className="singliProducts__right_top_bottom_box">
                  <div className="singliProducts__right_top_bottom_location">
                    <img src={gio} alt="gio images" />
                    <div className="singliProducts__right_top_bottom_location_box">
                      <span>Chilonzor tumani</span>
                      <p>Toshkent viloyati</p>
                    </div>
                  </div>
                  <a target="_blank" href={dataProducts.location}>
                    <img src={location} alt="location icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingliProducts;
