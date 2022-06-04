import React from 'react';

const Radio = ({ options, onChange, value, id, active }) => {

    if ( active === false ) return null;

    return (
        <>{ options.map( option => {
                return (
                    <label key={option} className="a">
                        <input 
                            type='radio'
                            name={id}
                            id={id}
                            checked={value === option}
                            value={option}
                            onChange={onChange}
                        />
                        <p>{option}</p>
                    </label>
                )
            })
        }
        </>
    );
}

export default Radio;
