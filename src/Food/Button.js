import React from 'react';

import './Button.css'

function Button({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      Show Food Items
    </button>
  );
}

export default Button;