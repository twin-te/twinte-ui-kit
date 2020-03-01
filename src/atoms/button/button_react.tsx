import React from 'react';
import './button_style.scss';

const Button: React.FC = ({ children }) => {
  return <button className="btn">{children}</button>;
};

export default Button;
