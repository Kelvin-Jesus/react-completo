import React from 'react';

const Input = ({ label, value, setValue, ...props }) => {

    const labelID = label?.toLowerCase()
    const handleChange = ({ target }) => setValue(target.value)

    return (
        <>
            <label id={labelID}>{label}</label>
            <input 
                type="text" 
                id={labelID} 
                onChange={handleChange}
                {...props}
            />
        </>
    );
}

export default Input;
