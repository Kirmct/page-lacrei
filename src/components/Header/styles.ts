import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme['gray-100']};

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    span {
      color: ${(props) => props.theme['green-300']};
      font-weight: bold;
      font-size: 2rem;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    nav {
      color: ${(props) => props.theme['gray-900']};
      ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        gap: 2.5rem;

        li a {
          font-size: 1rem;
          font-weight: 700;
          transition: 0.2s;

          border-top: 3px solid transparent;
          border-bottom: 3px solid transparent;

          &:hover {
            opacity: 0.8;
          }

          &.active {
            color: ${(props) => props.theme['green-300']};
          }
        }
      }
    }
  }

  @media (max-width: 520px) {
    div {
      justify-content: center;
      flex-direction: column;
      nav ul {
        gap: 0.875rem;
      }
    }
  }
`
