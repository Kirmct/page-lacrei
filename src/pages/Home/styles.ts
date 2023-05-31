import styled from 'styled-components'

export const HomeContaier = styled.main`
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 400px;

      h1 {
        font-size: 3rem;
        max-width: 30ch;
        font-weight: bold;
        color: ${(props) => props.theme.black};
      }

      p {
        font-size: 1.5rem;
        max-width: 35ch;
      }

      .divBtn {
        display: flex;
        justify-content: space-between;
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
    .divBtn {
      gap: 2rem 0;
      flex-direction: column;
      align-items: center;
    }
  }
`
