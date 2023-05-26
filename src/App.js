import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { itemContext } from './context';

function App() {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    return (
        <div className="App">
            <h2>Shopping Cart</h2>
            <itemContext.Provider value={{ item, setItem, total, setTotal }}>
                <Navbar />
                <Items />
            </itemContext.Provider>
        </div>
    );
}
export default App;
