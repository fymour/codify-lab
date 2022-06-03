import React from 'react';
import './in-wish-list.css';

export const ItemsInList = ({
    quantity = 0
}) => {
    return quantity > 0 ?(
        <div className="in-wish-list">
            { quantity }
        </div>
    ) : null
}