import React from "react";
import { useSelector } from 'react-redux';
import { BookWish } from "../../Components/BookToWishList/book-wish-list";
import { BookCover } from "../../Components/BookCover/book-cover";
import { Bookzhanr } from "../../Components/BookZhanr/book-zhanr";
import "./book-page.css";

export const BookPage = () => {
  const book = useSelector(state => state.books.currentBook);
  console.log('book', book);
  if (!book) 
  return null
  return (
    <div className="book-page">
      <h1 className="book-page__title">{book.title}</h1>
      <div className="book-page__content">
        <div className="book-page__left">
        </div>
        <div className="book-page__right">
          <BookCover image={book.image} />
          <p>{book.description}</p>
          {book.zhanry.map((zhanr) => (
            <Bookzhanr zhanr={zhanr} key={zhanr} />
          ))}
          <div className="book-add-book">
            <BookWish book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};