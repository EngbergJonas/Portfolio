import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Theme from './components/Shared/Theme'

import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import About from './components/About/About'

import Nav from './components/Nav/Nav'

import './index.css'

const App = () => {
  const aboutRef = React.createRef()
  return (
    <Theme>
      <Router>
        <Menu />
        <Hero scrollPosition={aboutRef} />
        <About ref={aboutRef} />
      </Router>
    </Theme>
  )
}

export default App
