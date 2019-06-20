import React from 'react';

const ImgComponent = ({ src, alt = '', className = '' }) =>
    <img src={src} alt={alt} className={className} />;

export default ImgComponent;