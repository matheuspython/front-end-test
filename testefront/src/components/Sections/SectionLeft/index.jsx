import React from 'react'
import gitHub from '../../../assets/github.png'
import {SectionLeftStyle} from './style'

export default function SectionLeft() {
  return (
    <SectionLeftStyle>
      <div className="limitador-autura">
        <h1>Buscar um usuário no <strong>Github</strong> ficou muito <strong>fácil!</strong></h1>
    
        <div className="busca">
          <input placeholder="Buscar usuário" type="text" name="" id="" />
          <button>
            <img src={gitHub} alt="git hub logo" />
          </button>
        </div>

      </div>

    </SectionLeftStyle>
  )
}
