import React from "react";

export const NumberInput = (props) => (
    <input type="number" onKeyDown={props.onKeyDown} ref={props.innerRef} max={props.max} min={1} className={props.className} />
);
