import React from 'react';

const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }}>{props.label}</button>
  )
}

export default Button;