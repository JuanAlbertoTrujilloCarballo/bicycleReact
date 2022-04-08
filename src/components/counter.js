import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const addOneToCounter = () => {
        setCount(count +1);
    }

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={addOneToCounter}>
                {/* () => setCount(count + 1) */}
                Click me
            </button>
        </>
    );
}

export default Counter;