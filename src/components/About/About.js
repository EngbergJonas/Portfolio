import React, { useRef, useState } from 'react'

import { topicsList, Signature, jonasLight, jonasDark } from './index'

import { connect } from 'react-redux'
import { dark, light } from '../Shared/Theme'

import { useTranslation } from 'react-i18next'

import {
  Page,
  IntroParagraph,
  Container,
  Title,
  Image,
  ImageContainer,
  TopicTitle,
  TopicContainer,
  Button,
  ButtonContainer,
  Subtitle
} from './styles.js'

import Experiences from './Experiences'

const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation()
  const [ topic, setTopic ] = useState('react')
  const [ logo, setLogo ] = useState(topicsList[0].logo)
  const [ active, setActive ] = useState(0)
  const topicRef = useRef(null)

  const handleTopicChange = (topic, index, logo) => {
    setTopic(topic.toLowerCase())
    setLogo(logo)
    setActive(index)
  }

  const createButtons = () =>
    topicsList.map((topic, index) => (
      <Button
        key={topic.name.toLowerCase()}
        onClick={() => handleTopicChange(topic.name, index, topic.logo)}
        active={active === index}
      >
        {topic.name.toLowerCase().includes('csharp') ? 'C#' : topic.name.toUpperCase()}
      </Button>
    ))

  const Buttons = () => <ButtonContainer>{createButtons()}</ButtonContainer>

  const Topic = props => {
    const color = props.value.includes('c#') ? 'csharp' : props.value
    const value = props.value
    return (
      <TopicContainer>
        <TopicTitle
          style={{ textAlign: 'left' }}
          $color={props.theme === dark ? dark.colors[color] : light.colors[color]}
        >
          {props.t(`titles.about.${value}`)}
        </TopicTitle>
        <div dangerouslySetInnerHTML={{ __html: props.children }} />
      </TopicContainer>
    )
  }

  const Section = props => (
    <Container>
      <div>{props.children}</div>
    </Container>
  )

  const Icon = props => (
    <Container signature={props.signature}>
      <div>
        <svg>{props.icon}</svg>
      </div>
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
      <Experiences t={t} setTopic={setTopic} topicRef={topicRef} />

      {/* Subtitle */}
      <Section>
        <Subtitle>Technologies</Subtitle>
      </Section>

      {/* Topic logo */}
      <Icon icon={logo} />
      {/* Topic buttons */}
      <Buttons />
      {/* Topic buttons */}
      <div ref={topicRef}>
        <Topic t={t} theme={props.theme} value={topic}>
          {t(`paragraphs.${topic}`)}
        </Topic>
      </div>

      {/* Signature logo */}
      <Icon signature icon={<Signature />} />
    </Page>
  )
})

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps, null, null, { forwardRef: true })(About)
