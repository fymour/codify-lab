import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/button";
import { setItemInList, deleteItemFromList } from "../../store/WishList/reducer";
import "./book-wish-list";

export const BookWish = ({ book }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.list.itemsInList);
  const isItemInList = items.some((item) => item.id === book.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInList) {
      dispatch(deleteItemFromList(book.id));
    } else {
      dispatch(setItemInList(book));
    }
  };

  return (
    <div className="book-buy">
      <Button
        type={isItemInList ? "secondary" : "primary" }
        onClick={handleClick}
      >
        {isItemInList ? "Убрать из корзины" : "В Корзину"}
      </Button>
    </div>
  );
};