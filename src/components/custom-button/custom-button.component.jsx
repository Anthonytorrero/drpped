import React from 'react';

import './custom-button.styles.scss';

// custom button component to be reused throughout application
const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default CustomButton;
