import React, { useState, useRef } from "react";

export const ShoppingListPageContainer = () => {
    const inputRef = useRef(null);
    const [items, setItems] = useState([]);
    const [lastId, setLastId] = useState(0);
    const addItem = () => {
        if (inputRef.current) {
            setItems([...items, inputRef.current.value]);
        }
    }

    return <div className="shoppingListContainer">
        <input ref={inputRef} />
        <button onClick={addItem}>Add</button>
        <button onClick={addItem}>Add</button>
       { items.map((item, index) => <div key={`${item}-${index}`}>{item}</div>) }
    </div>
};
