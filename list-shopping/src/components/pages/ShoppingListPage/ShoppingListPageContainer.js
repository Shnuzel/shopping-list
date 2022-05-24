import React, { useState, useRef } from "react";
import { TextInput, NumberInput } from "../../shared/Input";
import { ShoppingListItem } from "./ShoppingListItem";

export const ShoppingListPageContainer = () => {
    const inputRef = useRef(null);
    const quantityInputRef = useRef(null);
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (inputRef.current) {
            const quantity = quantityInputRef.current !== null ? parseInt(quantityInputRef.current.value) : 1;
            setItems([...items, { name: inputRef.current.value, quantity: quantity, bought: false }]);
        }
    }

    const setBought = (itemIndex) => {
        const newItems = items.map((item, index) => itemIndex === index ? { ...item, bought: !item.bought } : item)
        setItems(newItems);
    }

    const setQuantity= (itemIndex,newQauntity) => {
        const newItems = items.map((item, index) => itemIndex === index ? { ...item, quantity: newQauntity } : item)
        setItems(newItems);
    }

    return <div className="shoppingListContainer">
        <TextInput innerRef={inputRef} />
        <NumberInput innerRef={quantityInputRef} />
        <button onClick={addItem}>Add</button>
        {items.map((item, index) => <ShoppingListItem item={item} itemIndex={index} toggleBought={setBought} setQuantity={setQuantity} />)}
    </div>
};
