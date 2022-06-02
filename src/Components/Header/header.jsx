import React from "react";
import { Link } from "react-router-dom";
// import { WishList } from "";
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
         {/* <WishList />  */}
      </div>
    </div>
  );
};