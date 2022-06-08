import React from 'react';
import { useSelector } from "react-redux";
import { Button } from "../Button/button";
import { ListItem } from "../WishListItem/wish-list-item";
import "./wish-list-menu.css";

export const WishListMenu = ({ onClick }) => {
  const items = useSelector((state) => state.wishlist.itemsInList);
  return (
    <div className="list-menu">
      <div className="list-menu__books-list">
        {items > 0
          ? items.map((book) => (
              <ListItem
                key={book.image}
                image={book.image}
                title={book.title}
                id={book.id}
              />
            ))
          : "В избранном ничего нет"}
      </div>
      {items > 0 ? (
        <div className="list-menu__arrange">
          <Button type="primary" size="m" onClick={onClick}>
            Добавить в избранное
          </Button>
        </div>
      ) : null}
    </div>
  );
};