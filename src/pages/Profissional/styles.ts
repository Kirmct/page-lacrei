import styled from 'styled-components'

export const ProfissionalContainer = styled.main`
  padding-left: 1rem;
  padding-right: 1rem;

  .container {
    display: flex;
    max-width: 1200px;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    margin: 0 auto;

    section {
      flex: 1;
      max-width: 550px;
      gap: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 3rem;
        max-width: 30ch;
        font-weight: bold;
        color: ${(props) => props.theme.black};
      }

      p {
        border-left: 5px solid ${(props) => props.theme['green-300']};
        padding-left: 1rem;
        font-size: 1.5rem;
        max-width: 35ch;
      }
    }
    .divSvg {
      img {
        width: 100%;
        display: block;
      }
    }
  }
  @media (max-width: 1020px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
    .container {
      flex-direction: column;
      section {
        margin: 0 auto;
        justify-content: space-around;
        height: 250px;
        gap: 1.5rem;
      }
    }
  }

  @media (max-width: 570px) {
    .container section h1 {
      font-size: 2rem;
    }
    .container section p {
      font-size: 0.875rem;
    }
  }
`
