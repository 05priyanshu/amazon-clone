import React from "react";
import "./Product.css";
import ProductButton from "./ProductButton";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p className="title">{title}</p>
          <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt={title} />
        <ProductButton id={id} title={title} image={image} price={price} rating={rating}/>
      </div>
    </>
  );
};

export default Product;
