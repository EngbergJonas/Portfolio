import React from 'react'
import lightbulb from '../../media/lightbulb.svg'
import pen from '../../media/pen.svg'
import diamond from '../../media/diamond.svg'
import signature from '../../media/signature.svg'
import { Page, Paragraph, Container, Title, ContainerItem, Icon } from './styles'

const About = () => {
  return (
    <Page>
      <Container>
        <ContainerItem>
          <Title id='about'>About Me</Title>
        </ContainerItem>
      </Container>

      <Container>
        <ContainerItem>
          <Icon src={lightbulb} />
          <Paragraph iconText>Invent</Paragraph>
        </ContainerItem>
        <ContainerItem>
          <Icon src={pen} />
          <Paragraph iconText>Design</Paragraph>
        </ContainerItem>
        <ContainerItem>
          <Icon src={diamond} />
          <Paragraph iconText>Implement</Paragraph>
        </ContainerItem>
      </Container>
      <Container text>
        <ContainerItem>
          <Icon signature src={signature} />
        </ContainerItem>
      </Container>
      <Container text>
        <ContainerItem item>
          <Paragraph>
            I'm a Software Developer from Helsinki, Finland. My passion is web design and modern solutions.
          </Paragraph>
          <Paragraph info>
            This page is just a demo and currently under construction. Click on 'Resume' to get my Resume.
          </Paragraph>
        </ContainerItem>
      </Container>
    </Page>
  )
}

export default About
