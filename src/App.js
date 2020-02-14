import React, { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { Page } from './components/Styles/Page'
import { DefaultButton } from './components/Styles/Button'
import { Title } from './components/Styles/Title'

import Nav from './components/Nav/Nav'

const App = () => {
  const [ darkmode, setDarkmode ] = useState(false)

  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Router>
        <Nav />
        <Page>
          <Title>Hello World</Title>
          <DefaultButton onClick={() => setDarkmode(!darkmode)}>Change theme</DefaultButton>
        </Page>
      </Router>
    </ThemeProvider>
  )
}

export default App
