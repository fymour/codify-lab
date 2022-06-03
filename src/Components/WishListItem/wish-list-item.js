import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromList } from "../../store/WishList/reducer";
import {BsXLg} from 'react-icons/bs'
import "./wish-list-item.css";

export const ListItem = ({ title, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromList(id));
  };

  return (
    <div className="list-item">
      <span>{title} </span>
      <div className="list-item__price">
        <BsXLg
          size={15}
          className="list-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};