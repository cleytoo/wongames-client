import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }



  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => props.theme.colors.mainBg};
    font-size: ${(props) => props.theme.font.sizes.medium};
  }

  button, select, input, textarea {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

`
