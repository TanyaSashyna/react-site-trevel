import React from 'react';

const ErrorMessage = ({ text, showError}) =>
    <span className={`error ${showError && 'show'}`}>{ text }</span >;

export default ErrorMessage;