import React from 'react'
import SectionLeft from '../Sections/SectionLeft'
import SectionRight from '../Sections/SectionRight'

import {MainStyled} from './style'

export default function Main() {
  return (
    <MainStyled>
      <div className="container">
        <SectionLeft />
        <SectionRight />
      </div>
    </MainStyled>
  )
}
