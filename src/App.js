import React, { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './themes'

import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import StickyBottomLogo from './components/StickyBottomLogo/StickyBottomLogo'

//REDUX
import { setTheme } from './reducers/themeReducer'
import { connect } from 'react-redux'

const App = props => {
  const [ mode, setMode ] = useState(false)
  const modes = { mode, setMode }
  console.log('theme object', light)

  return (
    <ThemeProvider theme={mode ? light : dark}>
      <Router>
        <Nav {...modes} />
        <Hero mode={mode} />
        <button onClick={() => props.setTheme(light)} />
        {console.log('theme in redux', props.theme.theme)}
      </Router>
      <StickyBottomLogo />
    </ThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, { setTheme })(App)
