import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Textarea({ label, name }) {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} />
    </div>
  );
}
export default Textarea;

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
