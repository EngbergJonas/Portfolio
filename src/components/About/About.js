import React from 'react'

import jonasLight from '../../assets/media/jonas_light.jpg'
import jonasDark from '../../assets/media/jonas_dark.jpg'

import { ReactComponent as LightBulb } from '../../assets/media/lightbulb.svg'
import { ReactComponent as Diamond } from '../../assets/media/diamond.svg'
import { ReactComponent as Pen } from '../../assets/media/pen.svg'
import { ReactComponent as Signature } from '../../assets/media/signature.svg'

import { connect } from 'react-redux'
import { dark } from '../Shared/Theme'

import { useTranslation } from 'react-i18next'

import {
  Page,
  Paragraph,
  Container,
  Title,
  ContainerItem,
  ContainerItemSignature,
  ProfilePicture,
  ProfileFrame
} from './styles'

const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation()

  const LogoContainer = props => (
    <div>
      <ContainerItem>
        {props.icon}
        <Paragraph iconText>{props.text}</Paragraph>
      </ContainerItem>
    </div>
  )

  const SignatureContainer = props => (
    <div>
      <ContainerItem>
        <ContainerItemSignature>{props.icon}</ContainerItemSignature>
      </ContainerItem>
    </div>
  )

  const rows = t => (
    <div>
      {/* Title */}
      <Container>
        <ContainerItem>
          <Title ref={ref} id='about'>
            {t('titles.about')}
          </Title>
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

      {/* Sketches */}
      <Container>
        <LogoContainer icon={<LightBulb />} text={t('variables.invent')} />
        <LogoContainer icon={<Pen />} text={t('variables.design')} />
        <LogoContainer icon={<Diamond />} text={t('variables.implement')} />
      </Container>

      {/* Intro */}
      <Container>
        <SignatureContainer icon={<Signature />} />
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
