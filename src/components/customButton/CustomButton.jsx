import React from 'react';
import PropTypes from 'prop-types';
import './customButton.css';

const CustomButton = ({ disabled = false, variant = 'primary', handleClick, children }) => {
  return (
    <button
      className={`pill-button ${variant}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
