import { useContext } from 'react';
import colorContext from '../../context.js';

const GrandChildComponent = () => {
    const value = useContext(colorContext);
    console.log(value);
    return (
        <div>
            <h1>Grand Child Component</h1>
            <h4>{value.color}</h4>
        </div>
    );
};

export { GrandChildComponent };
