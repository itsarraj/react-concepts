import { GrandChildComponent } from './GrandChildComponent';

const ChildComponent = () => {
    return (
        <div>
            <h1>Child Component</h1>
            <GrandChildComponent />
        </div>
    );
};

export { ChildComponent };
