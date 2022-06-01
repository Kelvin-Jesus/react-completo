import React from 'react';

const Select = ({ children, value, setValue, ...props }) => {


    return (
        <>
            <select 
                value={value} 
                onChange={({ target }) => setValue(target.value)}
                {...props}
            >
                { children }
            </select>
        </>
    );
}

export default Select;
