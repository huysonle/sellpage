import React from "react";
import "../../style/headerinformation.css";

const Information = () => {
  return (
    <div className="header">
      <div className="header-PE">
        <div className="header-PE-P">P:0948070300</div>
        <div className="header-PE-E">Email:huysonle73@gmail.com</div>
      </div>
      <div className="header-Ac">
        <a href="" className="header-Ac-account">
          My account
        </a>
        <a href="" className="header-Ac-wistlist">
          wish list
        </a>
        <a href="" className="header-Ac-shopcart">
          shopping cart
        </a>
        <a href="" className="header-Ac-checkout">
          Check out
        </a>
      </div>
    </div>
  );
};

export default Information;
