import React, { useState } from "react";
import { Checkbox, NumberInput } from "../../shared/Input";

export const ShoppingListItem = (props) => {
    const [editMode, setEditMode] = useState(false);
    const toggleBought = () => props.toggleBought(props.itemIndex);

    const onKeyDown = (e) => {
        if (e.code === "Enter") {
            props.setQuantity(props.itemIndex, e.target.value);
            setEditMode(false);
        }
    }


    return <div className="shoppingListItem">
        <div>
            {props.item.name} - {!editMode ? <label onClick={() => setEditMode(true)}>{props.item.quantity}</label> : <NumberInput onKeyDown={onKeyDown} />}
            <Checkbox value={props.item.bought} onClick={toggleBought}/>
        </div>
    </div>
};
