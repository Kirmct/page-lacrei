import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'transparent'
export type ButtonColor = 'white' | 'black'

interface ButtonContainerProps {
  variant: ButtonVariant
  textColor: ButtonColor
  hasBorder: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 12rem;
  height: 3rem;
  font-weight: 700;
  font-size: 1.125rem;
  transition: 0.2s;

  background: ${(props) =>
    props.variant === 'primary'
      ? `${props.theme['green-300']}`
      : `${props.theme.white}`};

  color: ${(props) => props.theme.white};

  color: ${(props) => (props.textColor === 'white' ? 'white' : 'black')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: ${(props) =>
    props.hasBorder ? `2px solid ${props.theme['green-300']}` : `0`};

  &:hover {
    opacity: 0.7;
  }
`
