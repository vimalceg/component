import React from 'react';
import { useCounter } from '@desk/hooks';
export default function Counter() {
  let {
    count,
    handleIncrement,
    handleDecrement
  } = useCounter({
    count: 0
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    onClick: handleDecrement
  }, "Decrement"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    onClick: handleIncrement
  }, "Increment"));
}