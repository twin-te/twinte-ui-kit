import React from 'react';
import Radio from './index';
import './style.css';

export default { title: 'Radio' };

export const normal = () => (
  <>
    <Radio name="food">りんご</Radio>
    <Radio name="food">オレンジ</Radio>
  </>
);
