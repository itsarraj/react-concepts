import React, { useContext } from 'react';
import styles from '../styles/Total.module.css';
import { useValue } from '../itemContext';

function Navbar() {
    const { handleReset, item, setItem, total, setTotal } = useValue();

    return (
        <div className={styles.container}>
            <h1>Total : &#x20B9; {total}</h1>
            <h1>Items: {item}</h1>
            <div>
                {' '}
                <button
                    className={(styles.resetButtonsWrapper, styles.resetButton)}
                    onClick={() => handleReset()}
                >
                    Reset
                </button>{' '}
            </div>
        </div>
    );
}

export default Navbar;
