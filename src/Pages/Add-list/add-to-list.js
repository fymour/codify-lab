import React from 'react';
import { useSelector} from 'react-redux';
import { AddItem } from '../../Components/ToWishList/to-wish-list';
import './add-to-list.css';

export const AddPage = () => {
    const items = useSelector((state) => state.list);

    if(items.length < 1) {
        return <h1>В избранном ничего нет!</h1>
    }

    return (
        <div className="add-page">
            <div className="add-page__one">
                { items.map(book => <AddItem book={book}/>)}
            </div>
        </div>
    )
}