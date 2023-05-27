import { createContext, useContext, useState } from 'react';
const itemContext = createContext();

// Making Custom Hook for useContext
function useValue() {
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({ children }) {
    const [item, setItem] = useState(0);
    const [total, setTotal] = useState(0);

    const handleAdd = (price) => {
        setItem(item + 1);
        setTotal(total + price);
    };

    const handleRemove = (price) => {
        setItem(item - 1);
        setTotal(total - price);
    };

    const handleReset = () => {
        setItem(0);
        setTotal(0);
    };
    return (
        <>
            <itemContext.Provider
                value={{
                    item,
                    setItem,
                    total,
                    setTotal,
                    handleAdd,
                    handleRemove,
                    handleReset,
                }}
            >
                {children}
            </itemContext.Provider>
        </>
    );
}

export { itemContext, useValue };
export default CustomItemContext;
