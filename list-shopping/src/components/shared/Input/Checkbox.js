import React from "react";

export const Checkbox = (props) => (
    <input 
        type="checkbox" 
        checked={props.value} 
        ref={props.innerRef || null} 
        className={props.className} 
        onClick={props.onClick}
    />
);
