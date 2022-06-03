import React from 'react';

const Input = ({ label, value, onChange, onBlur, type, placeholder, error }) => {

    const labelID = label?.toLowerCase()
    // const handleChange = ({ target }) => setValue(target.value)

    return (
        <>
            <label id={labelID}>{label}</label>
            <input 
                id={labelID}
                name={labelID} 
                type={type} 
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
            />
            {error && <p>{error}</p>}
        </>
    );
}

export default Input;
