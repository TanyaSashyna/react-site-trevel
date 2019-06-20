import React from 'react';

import "./button.scss";

const Button = ({ text = false, type, className, id, onClick, classNameIcon }) =>
    <button type={type} className={className} id={id && id} onClick={onClick}>
        {classNameIcon && <i className={classNameIcon}></i>}
        {text && text}
    </button>;

export default Button;