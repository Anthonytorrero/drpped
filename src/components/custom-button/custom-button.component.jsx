import React from 'react';

import './custom-button.styles.scss';

// custom button component to be reused throughout application
const CustomButton = ({ children, isGoogleSignIn , ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;
