import React from 'react';
import './radio_style.scss';

type Props = {
  children: React.ReactNode;
  name: string;
};

const Radio: React.FC<Props> = ({ children, name }) => {
  return (
    <label>
      <input className="radio" type="radio" name={name} />
      <span className="radio__label">{children}</span>
    </label>
  );
};
export default Radio;
