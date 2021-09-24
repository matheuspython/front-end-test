import React from 'react'
import imagemDireita from '../../../assets/shutterstock_1087100012 1.png'
import {SectionRightStyle} from './style'

export default function SectionRight() {
  return (
    <SectionRightStyle>
      <img src={imagemDireita} alt="imagem da direita" />
    </SectionRightStyle>
  )
}
