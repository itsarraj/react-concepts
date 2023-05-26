import { ChildComponent } from './ChildComponent';
import { colorContext } from '../context.js';
import { useState } from 'react';
const ParentComponent = () => {
    const [color, setColor] = useState('red');
    return (
        <>
            <div>
                <h1>Parent Component</h1>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <colorContext.Provider value={{ color, setColor }}>
                    <ChildComponent />
                </colorContext.Provider>
            </div>
        </>
    );
};

export { ParentComponent };
