// import { useContext } from 'react';
import { colorContext } from '../context.js';

function GrandChildComponent() {
    // const value = useContext(colorContext);
    // console.log(value);
    return (
        <colorContext.Consumer>
            {(value) => (
                <>
                    <h1>Grand Child Component</h1>
                    <h4>{value.color}</h4>;
                </>
            )}
        </colorContext.Consumer>
    );
}

export { GrandChildComponent };
