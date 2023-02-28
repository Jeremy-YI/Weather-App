import { createGlobalStyle } from 'styled-components'
import theme from './'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    background-color: #F8F8F8;
    font-family: 'Montserrat', Helvetica, Sans-Serif;
    color: ${theme.palette.text_color};
    
  }

`
export default GlobalStyle
