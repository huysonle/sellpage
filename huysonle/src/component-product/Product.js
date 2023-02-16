import React from "react";
import "../../src/style/product.css";

const Product = () => {
  return (
    <div className="products-item">
      <a href="" className="card">
        <img
          className="card-img-top"
          src="https://tnj.vn/26759-large_default/qua-sinh-nhat-cho-nguoi-yeu-ltn0130.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Cord Necklace Conch Shells</h5>
          <p className="card-text">by monoda</p>
          <p className="card-text">
            <small className="text-muted">120$</small>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Product;
