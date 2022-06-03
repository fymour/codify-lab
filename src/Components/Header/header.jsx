import React from "react";
import { Link } from "react-router-dom";
import { Wishlist } from "../Wishlist/wish-list";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__book-title">
          Books
        </Link>
      </div>
      <div className="wrapper header__wish-list-wrapper">
         <Wishlist /> 
      </div>
    </div>
  );
};