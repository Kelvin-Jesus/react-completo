import React from 'react';

const Checkbox = ({ options, value, setValue }) => {

    const handleChange = ({ target }) => {
        if (target.checked) {
            console.log([
                ...value, 
                target.value
            ])
            setValue([
                ...value, 
                target.value
            ]);
        }
        else {
            console.log(value.filter(current => current != target.value))
            setValue(value.filter(current => current != target.value))
        }
    }

    return (
        <>
            {options.map( option => {
                return (<label key={option}>
                        <input 
                            type="checkbox" 
                            value={option} 
                            checked={value.includes(option)} 
                            onChange={handleChange}
                        />
                        {option}
                    </label>)
            })}
        </>
    );
}

export default Checkbox;
