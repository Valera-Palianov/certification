import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		height: 100%;
    color: black;
    font-family: 'Montserrat', sans-serif;
    background: ${(props) => props.theme.colors.background}
  }

  a {
    text-decoration: none;
    color: black
  }
`

export default GlobalStyle
