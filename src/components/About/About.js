import React from 'react'
import { Page, Paragraph, Container, Title, ContainerItem } from './styles'

const About = () => {
  return (
    <Page>
      <Container>
        <ContainerItem>
          <Title id='about'>About Me</Title>
        </ContainerItem>
      </Container>
      <Container>
        <ContainerItem item>
          <Paragraph>
            I'm a Software Developer from Helsinki, Finland. My passion is web design and modern solutions.
          </Paragraph>
        </ContainerItem>
      </Container>
      <Container>
        <ContainerItem item>
          <Paragraph>Design</Paragraph>
        </ContainerItem>
        <ContainerItem item>
          <Paragraph>Responsive</Paragraph>
        </ContainerItem>
        <ContainerItem item>
          <Paragraph>Modern</Paragraph>
        </ContainerItem>
      </Container>
    </Page>
  )
}

export default About
