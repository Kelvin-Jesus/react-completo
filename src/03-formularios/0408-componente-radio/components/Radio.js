import React from 'react';

const Radio = ({ options, value, setValue }) => {

    return (
        <>
            {options.map( option => {
                return (<label className='a' key={option}>
                        <input 
                            type="radio" 
                            value={option} 
                            checked={value === option} 
                            onChange={({ target }) => setValue(target.value)}
                        />
                        <p>{option}</p>
                    </label>)
            })}
        </>
    );
}

export default Radio;
