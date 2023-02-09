import React from "react";
import "../../style/navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <h1>New Arrivals</h1>
        <div className="navbar1">
          <a href="">All Item</a>
          <a href="">Jewellery</a>
          <a href="">Clothing&Accessories</a>
          <a href="">Celebrations</a>
          <a href="">Art</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
