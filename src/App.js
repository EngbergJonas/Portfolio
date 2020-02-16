import React, { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import { DefaultButton } from './components/Styles/Button'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'

const App = () => {
  const [ mode, setMode ] = useState(false)
  const props = { mode, setMode }
  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <Router>
        <Nav {...props} />
        <Hero />
        <DefaultButton onClick={() => setMode(!mode)}>Change theme</DefaultButton>
      </Router>
    </ThemeProvider>
  )
}

export default App
