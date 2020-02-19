import React, { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'

import StickyBottomLogo from './components/StickyBottomLogo/StickyBottomLogo'

const App = () => {
  const [ mode, setMode ] = useState(false)
  const props = { mode, setMode }
  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <Router>
        <Nav {...props} />
        <Hero />
      </Router>
      <StickyBottomLogo />
    </ThemeProvider>
  )
}

export default App
