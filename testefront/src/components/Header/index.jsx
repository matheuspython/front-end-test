import React from 'react';

import { StyledHeader } from './styles';
import logo from '../../assets/logo.png'


function Header() {
  return (
  <StyledHeader>
    
    <img src={logo}/>

  </StyledHeader>
  )
}

export default Header;