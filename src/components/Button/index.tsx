import { NavLink } from 'react-router-dom'
import { ButtonColor, ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
  content: string
  textColor?: ButtonColor
  hasBorder?: boolean
  url: string
}

export const Button = ({
  variant = 'primary',
  content,
  textColor = 'white',
  hasBorder = false,
  url,
}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} textColor={textColor} hasBorder>
      <NavLink to={url}>{content}</NavLink>
    </ButtonContainer>
  )
}
