import React from "react";
import "../ProductsPages/ProductsPages.scss";
import favoirite from "../../assets/svg/favoirite.svg";

const ProductsPages = () => {
  return (
    <div className="productsPages">
      <img
        className="productsPages__images"
        src={favoirite}
        alt="favoirite images"
      />
    </div>
  );
};

export default ProductsPages;
