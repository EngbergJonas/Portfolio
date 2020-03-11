import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Theme from './components/Theme'

import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import About from './components/About/About'

const App = () => {
  return (
    <Theme>
      <Router>
        <Nav />
        <Hero />
        <About />
      </Router>
    </Theme>
  )
}

export default App
