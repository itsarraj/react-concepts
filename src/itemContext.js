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
    return (
        <>
            <itemContext.Provider value={{ item, setItem, total, setTotal }}>
                {children}
            </itemContext.Provider>
        </>
    );
}

export { itemContext, useValue };
export default CustomItemContext;
