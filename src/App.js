import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Theme from './components/Shared/Theme'

import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import About from './components/About/About'

const App = () => {
  const aboutRef = React.createRef()
  return (
    <Theme>
      <Router>
        <Nav />
        <Hero scrollPosition={aboutRef} />
        <About ref={aboutRef} />
      </Router>
    </Theme>
  )
}

export default App
