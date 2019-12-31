import React from 'react';
import './style.css';

type Props = {
  children?: string;
};

const Checkbox: React.FC<Props> = ({
  children = 'childrenを指定して下さい'
}) => {
  return (
    <label className="checkbox">
      <input className="checkbox__checkbox" type="checkbox" />
      <span className="checkbox__label">{children}</span>
    </label>
  );
};
export default Checkbox;
