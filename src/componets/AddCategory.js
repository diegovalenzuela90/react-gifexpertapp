import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setinputValue (e.target.value);
    }

    const handlesubmit = (e) => {
        e.preventDefault(); // esta linea evita el refresc del navegador.
        // console.log('Submit Hecho')
        if (inputValue.trim().length > 2){
            setCategories( cats=>[inputValue, ...cats]);
            setinputValue('');
        }

    }
    return (
        <form onSubmit= {handlesubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={ handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}