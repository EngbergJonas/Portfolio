import React from 'react'

import lightbulb from '../../assets/media/lightbulb.svg'
import pen from '../../assets/media/pen.svg'
import diamond from '../../assets/media/diamond.svg'
import signature from '../../assets/media/signature.svg'
import jonas from '../../assets/media/jonas.jpg'

import { useTranslation } from 'react-i18next'

import { Page, Paragraph, Container, Title, ContainerItem, Icon, ProfilePicture, ProfileFrame } from './styles'

const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation()

  const LogoContainer = props => (
    <div>
      <ContainerItem>
        <Icon src={props.logo} />
        <Paragraph iconText>{props.text}</Paragraph>
      </ContainerItem>
    </div>
  )
  const rows = t => (
    <div>
      <Container>
        <ContainerItem>
          <Title ref={ref}>{t('titles.about')}</Title>
        </ContainerItem>
      </Container>

      <Container>
        <ContainerItem>
          <ProfileFrame>
            <ProfilePicture src={jonas} />
          </ProfileFrame>
        </ContainerItem>
      </Container>

      <Container>
        <LogoContainer logo={lightbulb} text={t('variables.invent')} />
        <LogoContainer logo={pen} text={t('variables.design')} />
        <LogoContainer logo={diamond} text={t('variables.implement')} />
      </Container>

      <Container text>
        <ContainerItem>
          <Icon signature src={signature} />
        </ContainerItem>
      </Container>

      <Container text>
        <ContainerItem item>
          <Paragraph>{t('paragraphs.aboutIntro')}</Paragraph>
        </ContainerItem>
      </Container>
    </div>
  )

  return <Page>{rows(t)}</Page>
})

export default About
