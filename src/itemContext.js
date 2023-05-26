import { createContext, useState } from 'react';
const itemContext = createContext();

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

export { itemContext };
export default CustomItemContext;
