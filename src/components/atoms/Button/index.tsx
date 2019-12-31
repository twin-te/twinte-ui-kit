import React from 'react';
import './style.css';

const Button: React.FC = ({ children }) => {
  return <button className="register-btn">{children}</button>;
};
// → childrenはタグ内の要素が入るので<Button>保存</Button>のようにして使うことができる

export default Button;
