import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import store from '@redux/store'

import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import GlobalStyle from '@styles/index'

const apiUrl = process.env.REACT_APP_API_URL
const apiUndefinaedMessage = `
  REACT_APP_API_URL not defined as env variable. 
  Please, copy '.env.dist' file in root directory and save as '.env'
`

ReactDOM.render(
  <>
    {
      apiUrl ?
        (
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </Provider>
        )
      : apiUndefinaedMessage
    }
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
