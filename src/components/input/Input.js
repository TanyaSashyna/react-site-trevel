import React from 'react';

const Input = ({ type, name, placeholder = '', onChange, id }) =>
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
    />;

export default Input;