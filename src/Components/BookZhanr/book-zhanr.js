import React from 'react';
import './book-zhanr.css';

export const Bookzhanr = ({ zhanr = '' }) => {
    return <span className="book-zhanr">{ zhanr }</span>
}