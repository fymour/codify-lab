import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/reducer';
import wishlistReducer from './WishList/reducer';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        wishlist: wishlistReducer
    }
  })