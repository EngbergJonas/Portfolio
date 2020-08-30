import React, { useRef } from 'react'

import { Signature, Icon, Topic, Buttons, Experiences, jonasLight, jonasDark } from './index'
import { connect } from 'react-redux'
import { dark } from '../Shared/Theme'
import { useTranslation } from 'react-i18next'

import { Page, IntroParagraph, Container, Title, Image, ImageContainer } from './styles.js'

const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation()
  const topicRef = useRef(null)

  const Section = props => (
    <Container>
      <div>{props.children}</div>
    </Container>
  )

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
          <Image src={props.theme === dark ? jonasDark : jonasLight} />
        </ImageContainer>
      </Section>

      {/* Intro */}
      <Section>
        <IntroParagraph>{t('paragraphs.aboutIntro')}</IntroParagraph>
      </Section>

      {/* Skills & Experiences */}
      <Experiences t={t} topicRef={topicRef} />

      {/* Topics */}
      <div ref={topicRef}>
        <Topic t={t}>{t(`paragraphs.${props.topic.name.toLowerCase()}`)}</Topic>
      </div>
      {/* Signature */}
      <Icon signature icon={<Signature />} />

      {/* Topic Buttons */}
      <Buttons />
    </Page>
  )
})

const mapStateToProps = state => {
  return {
    theme: state.theme,
    topic: state.topic
  }
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(About)
