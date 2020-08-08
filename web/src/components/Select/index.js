import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Select({ label, name, options }) {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name}>
        <option value="" disabled hidden>Selecione uma Opção</option>
        {options.map((option) => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>

    </div>
  );
}
export default Select;

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
