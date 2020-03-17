import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Theme from './components/Theme'

import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import About from './components/About/About'

const App = () => {
  const aboutRef = React.createRef()
  return (
    <Theme>
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <div>
                <Hero scrollPosition={aboutRef} />
                <About ref={aboutRef} />
              </div>
            )}
          />
        </Switch>
      </Router>
    </Theme>
  )
}

export default App
