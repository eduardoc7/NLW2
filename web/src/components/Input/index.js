import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Input({ label, name, type }) {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} />
    </div>
  );
}
export default Input;

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};
