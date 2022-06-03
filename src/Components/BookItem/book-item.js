import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bookzhanr } from "../BookZhanr/book-zhanr";
import { BookCover } from '../BookCover/book-cover'
import {BookWish} from '../BookToWishList/book-wish-list'
import { setCurrentBook } from "../../store/Books/reducer";
import './book-item.css'

export const BookItem = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentBook(book));
    navigate(`/app/${book.title}`);
  };

  return (
    <div className="book-item" onClick={handleClick} >
      <BookCover image={book.image} />
      <div className="book-item__details">
        <span className="book-item__title">{book.title}</span>
        <div className="book-item__genre">
          {book.zhanry.map((zhanr) => (
            <Bookzhanr zhanr={zhanr} key={zhanr} />
          ))}
        </div>
        <div className="book-item__wish-list">
           {/* <BookWish book={book} />  */}
        </div>
      </div>
    </div>
  );
};
