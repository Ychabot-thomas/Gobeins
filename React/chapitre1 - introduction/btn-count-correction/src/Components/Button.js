import React, { useState } from 'react';

import './Button.scss';

const Button = ({ handleClick, label, active }) => {

  const handle = () => handleClick();

  if(active == undefined) active = false;

  return (
   // TODO
  );
}

export default Button;