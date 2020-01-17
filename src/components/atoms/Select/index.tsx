import React from 'react';
import './style.css';

type Props = {
  name: string;
  children?: string;
};

const Radio: React.FC<Props> = ({
  name,
  children = 'childrenを指定して下さい'
}) => {
  return (
    <label>
      <input className="radio__radio" type="radio" name={name} />
      <span className="radio__label">{children}</span>
    </label>
  );
};
export default Radio;
