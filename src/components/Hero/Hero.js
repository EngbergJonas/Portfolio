import React from 'react'
import { Title, Subtitle, Span, Container, Page, Button } from './styles'
const Hero = ({ mode }) => {
  return (
    <Page dark={!mode}>
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
        <Button>About Me</Button>
      </Container>
    </Page>
  )
}

export default Hero
