import React from 'react';
import style from './Button.module.css';
export default function Button(props) {
  let {
    text,
    onClick
  } = props;
  return /*#__PURE__*/React.createElement("button", {
    className: style.button,
    onClick: onClick
  }, text);
}