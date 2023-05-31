import styled from 'styled-components'

export const FooterContaier = styled.footer`
  padding-left: 1rem;
  padding-right: 1rem;
  .footerContent {
    border-top: 1px solid ${(props) => props.theme['green-300']};
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 2rem;

    .footerMenu ul {
      display: flex;
      gap: 3rem;
      li a {
        font-size: 1rem;
        transition: 0.2s;

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover {
          opacity: 0.8;
        }

        &.active {
          font-weight: 700;
        }
      }
    }

    .footerLinks {
      margin-top: 1rem;
      display: flex;
      gap: 2rem;
      svg {
        cursor: pointer;
        transition: 0.1s;
        &:hover {
          opacity: 0.7;
        }
      }
    }

    p {
      margin-top: 1rem;
    }

    @media (max-width: 1000px) {
      padding: 1.5rem 2rem;
    }
    @media (max-width: 500px) {
      .footerMenu ul {
        flex-direction: column;
        gap: 0.875rem;
      }
    }
  }
`
