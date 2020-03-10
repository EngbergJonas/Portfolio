import React from 'react'
import { Page, Subtitle, Paragraph, Container, Title, ContainerItem } from './styles'

const About = () => {
  return (
    <Page>
      <Container center>
        <ContainerItem>
          <Title id='about'>About Me</Title>
        </ContainerItem>
      </Container>
      <Container center>
        <ContainerItem>
          <Subtitle>Lorem Ipsum</Subtitle>
          <Paragraph>Container 1</Paragraph>
        </ContainerItem>
        <ContainerItem>
          <Subtitle>Lorem Ipsum</Subtitle>
          <Paragraph>Container 2</Paragraph>
        </ContainerItem>
        <ContainerItem>
          <Subtitle>Lorem Ipsum</Subtitle>
          <Paragraph>Container 3</Paragraph>
        </ContainerItem>
      </Container>
    </Page>
  )
}

export default About
