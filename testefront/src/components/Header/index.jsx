import React from 'react';

import { StyledHeader } from './style';
import logo from '../../assets/Logo.png'


function Header() {
  return (
  <StyledHeader>
    <div className="container">
    <img src={logo} alt="logo do site" />

    </div>
  </StyledHeader>
  )
}

export default Header;