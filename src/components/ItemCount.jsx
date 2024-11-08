import React, { useState } from "react";
import "../styles/count.css"

const ItemCount = ({ addCart }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="item-count-container">
            <div className="counter-container">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button className="add-cart-button" onClick={() => addCart(count)}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
