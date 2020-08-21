import React from 'react'

import lightbulb from '../../assets/media/lightbulb.svg'
import pen from '../../assets/media/pen.svg'
import diamond from '../../assets/media/diamond.svg'
import signature from '../../assets/media/signature.svg'
import jonasLight from '../../assets/media/jonas_light.jpg'
import jonasDark from '../../assets/media/jonas_dark.jpg'

import { connect } from 'react-redux'
import { dark } from '../Shared/Theme'

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
      {/* Title */}
      <Container>
        <ContainerItem>
          <Title ref={ref}>{t('titles.about')}</Title>
        </ContainerItem>
      </Container>

      {/* Sketches */}
      <Container>
        <LogoContainer logo={lightbulb} text={t('variables.invent')} />
        <LogoContainer logo={pen} text={t('variables.design')} />
        <LogoContainer logo={diamond} text={t('variables.implement')} />
      </Container>

      {/* Signature */}
      <Container text>
        <ContainerItem>
          <Icon signature src={signature} />
        </ContainerItem>
      </Container>

      {/* Profile Picture */}
      <Container>
        <ContainerItem>
          <ProfileFrame>
            <ProfilePicture src={props.theme === dark ? jonasDark : jonasLight} />
          </ProfileFrame>
        </ContainerItem>
      </Container>

      {/* Intro */}
      <Container text>
        <ContainerItem item>
          <Paragraph>{t('paragraphs.aboutIntro')}</Paragraph>
        </ContainerItem>
      </Container>
    </div>
  )

  return <Page>{rows(t)}</Page>
})

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(About)
