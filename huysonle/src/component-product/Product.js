import React from "react";

const Product = () => {
  return (
    <div>
      <a className="product" href="">
        <img
          src="https://th.bing.com/th/id/R.0419851ed1dd489793c8b29f599b1b00?rik=Wx77vmR3kcEgPg&riu=http%3a%2f%2fphulieu.com.vn%2fupload%2fsanpham%2fimg2018050709203262845077.jpg&ehk=pQyAE3rB9Z668zGLwFZW%2fUW3rvNO7JubzIV4Sk4fiGU%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <div>Cord Necklace Conch Shells</div>
        <h3 className="product-madeby">by monoda</h3>
        <h2 className="product-price">120$</h2>
      </a>
      <div>
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
