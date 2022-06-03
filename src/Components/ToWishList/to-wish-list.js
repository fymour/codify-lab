import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BookCover } from '../BookCover/book-cover';
import './to-wish-list.css';
import { deleteItemFromList } from '../../store/WishList/reducer';

export const AddItem = ({ book }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromList(book.id))
    }
    return (
        <div className="add-item">
            <div className="add-item__cover">
                <BookCover image={ book.image }/>
            </div>
            <div className="add-item__title">
                <span> { book.title } </span>
            </div>
            <div className="add-item__to-list">
                <AiOutlineCloseCircle
                    size={25}
                    className="list-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    )
}