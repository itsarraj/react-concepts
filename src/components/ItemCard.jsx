import React from 'react';
import styles from '../styles/ItemCard.module.css';
import { useContext } from 'react';
import { useValue } from '../itemContext';

function ItemCard({ name, price }) {
    const { item, setItem, total, setTotal } = useValue();
    const handleAdd = () => {
        setItem(item + 1);
        setTotal(total + price);
    };

    const handleRemove = () => {
        setItem(item - 1);
        setTotal(total - price);
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
