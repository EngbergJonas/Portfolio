import React, { useRef } from 'react'

import { connect, useSelector, useDispatch } from 'react-redux'
import { dark } from '../Shared/Theme'
import { useTranslation } from 'react-i18next'

import { Signature, Icon, Topic, Buttons, Experiences, jonasLight, jonasDark } from './index'
import { Page, Intro, Container, Title, Image, ImageContainer } from './styles.js'

interface SectionProps {
  children: React.ReactNode
}

const Section = (props: SectionProps) => (
  <Container>
    <div>{props.children}</div>
  </Container>
)

interface AboutProps {
  theme: any
  topic: any
}
const About = React.forwardRef((props: AboutProps, ref) => {
  const { t } = useTranslation()
  const topicRef = useRef(null)

  const { theme, topic } = props

  return (
    <Page>
      {/* Title */}
      <Section>
        <Title ref={ref} id='about'>
          {t('titles.about.main')}
        </Title>
      </Section>

      {/* Profile Picture */}
      <Section>
        <ImageContainer>
          <Image src={theme === dark ? jonasDark : jonasLight} />
        </ImageContainer>
      </Section>

      {/* Intro */}
      <Section>
        <Intro>{t('paragraphs.aboutIntro')}</Intro>
      </Section>

      {/* Skills & Experiences */}
      <Experiences t={t} topicRef={topicRef} />

      {/* Topics */}
      <div ref={topicRef}>
        <Topic t={t}>{t(`paragraphs.${topic.name.toLowerCase()}`)}</Topic>
      </div>

      {/* Signature */}
      <Icon signature icon={<Signature />} />

      {/* Topic Buttons */}
      <Buttons />
    </Page>
  )
})

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    topic: state.topic,
  }
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(About)
