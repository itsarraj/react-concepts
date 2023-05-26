import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useContext } from 'react';
import { itemContext, priceContext } from '../context';

function ItemCard({ name, price }) {
    const value = useContext(itemContext);
    console.log('value', value);

    const handleAdd = () => {
        value.setItem(value.item + 1);
        value.setTotal(value.total + price);
    };

    const handleRemove = () => {
        value.setItem(value.item - 1);
        value.setTotal(value.total - price);
    };

    return (
        <div className={styles.itemCard}>
            <div className={styles.itemName}>{name}</div>
            <div className={styles.itemPrice}>&#x20B9; {price}</div>
            <div className={styles.itemButtonsWrapper}>
                <button
                    className={styles.itemButton}
                    onClick={() => handleAdd()}
                >
                    Add
                </button>
                <button
                    className={styles.itemButton}
                    onClick={() => handleRemove()}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default ItemCard;
