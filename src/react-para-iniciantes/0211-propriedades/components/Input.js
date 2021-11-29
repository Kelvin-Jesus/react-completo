import React from 'react';

const Input = ({ labelName, labelAndInputID, ...props }) => {
    return (
        <div>
            <label htmlFor={labelAndInputID}>{labelName}</label>
            <input type="text" id={labelAndInputID} {...props}/>
        </div>
    );
}

export default Input;
