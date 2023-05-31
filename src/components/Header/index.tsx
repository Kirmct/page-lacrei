import { HeaderContainer } from './styles'
import { NavLink, useNavigate } from 'react-router-dom'
export const Header = () => {
  const navigate = useNavigate()
  function handleLogoClick() {
    navigate('/')
  }
  return (
    <HeaderContainer>
      <div>
        <span onClick={handleLogoClick}>Lacrei</span>
        <nav>
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
      </div>
    </HeaderContainer>
  )
}
