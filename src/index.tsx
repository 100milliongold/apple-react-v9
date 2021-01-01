import React from 'react'
import ReactDOM from 'react-dom'
import { reportWebVitals } from 'core'

import { Navigations, Sections, Footer } from 'components'
import { ThemeProvider } from 'styled-components'
import { DefaultStyles, MainStyles, theme } from 'styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DefaultStyles />
    <Navigations />
    <Sections />
    <Footer />
    <MainStyles />
  </ThemeProvider>,
  document.getElementById('container')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
