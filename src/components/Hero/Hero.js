import React from 'react'
import { Title, Subtitle, Span, Container, Page, Button, Item } from './styles'

import { connect } from 'react-redux'
import { dark } from '../Theme'

const Hero = props => {
  const scrollToRef = () => props.scrollPosition.current.scrollIntoView({ behavior: 'smooth' })
  return (
    <Page dark={props.theme === dark}>
      <Container>
        <Title>Hello,</Title>
        <Subtitle>
          I'm <Span>Jonas Engberg</Span>
        </Subtitle>
        <Subtitle>
          My <Span>passion</Span> is <Span>Web Development</Span>
        </Subtitle>
        <Subtitle>
          and <Span>Web Design</Span>
        </Subtitle>
        <Item>
          <Button onClick={() => scrollToRef()}>About Me</Button>
        </Item>
      </Container>
    </Page>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(Hero)
