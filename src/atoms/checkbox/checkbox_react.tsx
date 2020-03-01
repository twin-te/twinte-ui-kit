import React from 'react';
import './checkbox_style.scss';

const Checkbox: React.FC = ({ children }) => {
  return (
    <label className="checkbox">
      <input className="checkbox" type="checkbox" />
      <span className="checkbox__label">{children}</span>
    </label>
  );
};
export default Checkbox;
