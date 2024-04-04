import React, { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 0);
    // });
    return (
        <>
            <h1 className="font-bold text-4xl text-green-500">Count:{count}</h1>
            <button
                className="border rounded-md bg-gray-600 border-white p-3"
                onClick={increment}
            >
                Increment
            </button>
            <button
                className="border rounded-md bg-gray-600 border-white p-3"
                onClick={decrement}
            >
                Decrement
            </button>
        </>
    );
};

export default Counter;
