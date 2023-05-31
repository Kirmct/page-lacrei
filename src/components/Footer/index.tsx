import { NavLink } from 'react-router-dom'
import { FooterContaier } from './styles'

import {
  LinkedinLogo,
  FacebookLogo,
  InstagramLogo,
} from '@phosphor-icons/react'

export const Footer = () => {
  return (
    <FooterContaier>
      <div className="footerContent">
        <nav className="footerMenu">
          <ul>
            <li>
              <NavLink to="/" title="Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pessoa-usuaria" title="Pessoa Usuária">
                Pessoa Usuária
              </NavLink>
            </li>
            <li>
              <NavLink to="/profissional" title="Profissional">
                Profissional
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footerLinks">
          <InstagramLogo size={32} color="green" />
          <FacebookLogo size={32} color="green" />
          <LinkedinLogo size={32} color="green" />
        </div>
        <p>Desafio Front-end Lacrei</p>
      </div>
    </FooterContaier>
  )
}
