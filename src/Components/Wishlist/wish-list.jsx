import React from 'react';
import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WishListMenu } from "../WishListMenu/wish-list-menu";
import { ItemsInList} from "../InWishList/in-wish-list";
import "./wish-list.css";
import {BsFillHeartFill} from 'react-icons/bs'
 
export const Wishlist = () => {
  const [isListMenuVisible, setIsListMenuVisible] = useState(false);
  const items = useSelector((state) => state.list);
  const navigate = useNavigate();
  const handleGoToAddClick = useCallback(() => {
    setIsListMenuVisible(false);
    navigate('/add');
  }, )[navigate];



  return (
    <div>
        <ItemsInList quantity={items}/>
      <BsFillHeartFill
        color="white"
        size={25}
        className="list-icon"
        onClick={() => setIsListMenuVisible(!isListMenuVisible)}
      />
      {isListMenuVisible && <WishListMenu onClick={ handleGoToAddClick }/>}

    </div>
  )
}
