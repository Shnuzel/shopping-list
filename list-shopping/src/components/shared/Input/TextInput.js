import React from "react";

export const TextInput = (props) => (
    <input ref={props.innerRef} className={props.className} />
);
