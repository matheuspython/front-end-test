import React from 'react'
import redesSociais from '../../assets/Sociais.png'


import {FooterStlyled} from './style'

export default function Footer() {
  return (
    <FooterStlyled>
      <img src={redesSociais} alt="imagem das redes sociais" />
    </FooterStlyled>
  )
}
