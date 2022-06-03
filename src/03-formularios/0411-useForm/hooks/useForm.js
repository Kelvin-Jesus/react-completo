import React from 'react';

const typesValidation = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'Cep inválido'
    },
    email: {
        regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        message: 'Email inválido'
    }

};

const useForm = (inputType) => {
    
    const [ value, setValue ] = React.useState('');
    const [ error, setError ] = React.useState(null);

    const validate = valueValidation => {

        if ( valueValidation.length === 0 ) {
            setError('Preencha um valor');
            return false;
        }

        if ( typesValidation[inputType]?.regex.test(valueValidation) === false ) {
            setError(typesValidation[inputType].message);
            return false;
        }

        setError(null);
        return true;
    }

    const onChange = ({ target }) => {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return {
        value, 
        setValue,
        error,
        onChange, 
        onBlur: () => validate(value),
        validate: () => validate(value)
    };
}

export default useForm;
