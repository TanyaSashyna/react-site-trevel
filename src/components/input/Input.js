import React from 'react';

const Input = ({ type, name, placeholder = '', onChange }) =>
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
    />;

export default Input;