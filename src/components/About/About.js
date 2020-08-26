import React, { useRef, useState } from 'react'

import jonasLight from '../../assets/media/jonas_light.jpg'
import jonasDark from '../../assets/media/jonas_dark.jpg'

import { ReactComponent as Signature } from '../../assets/media/signature_thick.svg'
import { ReactComponent as SketchylineUp } from '../../assets/media/sketchylines_up.svg'
import { ReactComponent as SketchylineDown } from '../../assets/media/sketchylines_down.svg'
import { ReactComponent as ReactLogo } from '../../assets/media/react.svg'
import { ReactComponent as AngularLogo } from '../../assets/media/angular.svg'
import { ReactComponent as PythonLogo } from '../../assets/media/python.svg'
import { ReactComponent as CSharpLogo } from '../../assets/media/csharp.svg'
import { ReactComponent as JavaLogo } from '../../assets/media/java.svg'

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
  Line,
  //Skills & Experience styles
  InfoTitle,
  InfoTab,
  Underline,
  Button,
  ButtonContainer,
  Subtitle
} from './styles'

const topicsList = [
  {
    name: 'React',
    logo: <ReactLogo />
  },
  {
    name: 'Angular',
    logo: <AngularLogo />
  },
  {
    name: 'C#',
    logo: <CSharpLogo />
  },
  {
    name: 'Python',
    logo: <PythonLogo />
  },
  {
    name: 'Java',
    logo: <JavaLogo />
  }
]

const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation()
  const [ topic, setTopic ] = useState('react')
  const [ logo, setLogo ] = useState(topicsList[0].logo)
  const [ active, setActive ] = useState(0)
  const topicRef = useRef(null)

  const scrollToTopic = () => window.scrollTo({ top: topicRef.current.offsetTop, left: 0, behavior: 'smooth' })

  const handleTopicChange = (topic, index, logo) => {
    setTopic(topic.toLowerCase())
    setLogo(logo)
    setActive(index)
  }

  const handleScrollToTopic = topic => {
    scrollToTopic()
    setTopic(topic)
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

  const LogoContainer = props => (
    <Container signature={props.signature}>
      <div>
        <svg>{props.icon}</svg>
      </div>
    </Container>
  )

  const ExperiencesIntro = () => (
    <div>
      <Line>
        <SketchylineUp />
      </Line>

      <InfoTab main>
        <InfoTitle main>{t('titles.about.experiences')}</InfoTitle>
        <p>
          {t('exparagraph.1')} <TopicLink value={'java'}>Java</TopicLink>, {t('exparagraph.2')}{' '}
          <TopicLink value={'csharp'}>C#</TopicLink>. {t('exparagraph.3')}{' '}
          <TopicLink value={'python'}>Python</TopicLink>
        </p>
        <p>
          {t('exparagraph.4')} <TopicLink value={'react'}>React</TopicLink>.
        </p>
        <p>
          {t('exparagraph.5')} <TopicLink value={'angular'}>Angular</TopicLink> {t('exparagraph.5')}{' '}
          <TopicLink value={'csharp'}>.NET</TopicLink>.
        </p>
      </InfoTab>
      <Line>
        <SketchylineDown />
      </Line>
    </div>
  )

  const InfoSection = props => {
    const color = props.color.includes('c#') ? 'csharp' : props.color

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <InfoTab>
            <InfoTitle
              style={{ textAlign: 'left' }}
              $color={props.theme === dark ? dark.colors[color] : dark.colors[color]}
            >
              {props.title}
            </InfoTitle>
            <div dangerouslySetInnerHTML={{ __html: props.children }} />
          </InfoTab>
        </div>
      </div>
    )
  }

  const TopicLink = props => {
    const color = props.value
    const topic = props.value
    return (
      <Underline
        $color={props.dark ? dark.colors.pale[color] : light.colors.pale[color]}
        onClick={() => handleScrollToTopic(topic)}
      >
        {props.children}
      </Underline>
    )
  }

  /* */
  const rows = t => (
    <div>
      {/* Title */}
      <Container>
        <div>
          <Title ref={ref} id='about'>
            {t('titles.about.main')}
          </Title>
        </div>
      </Container>

      {/* Profile Picture */}
      <Container>
        <div>
          <ImageContainer>
            <Image src={props.theme === dark ? jonasDark : jonasLight} />
          </ImageContainer>
        </div>
      </Container>
      {/* Intro */}
      <Container>
        <div>
          <IntroParagraph>{t('paragraphs.aboutIntro')}</IntroParagraph>
        </div>
      </Container>

      <ExperiencesIntro />

      <Container>
        <div>
          <Subtitle>Technologies</Subtitle>
        </div>
      </Container>

      <LogoContainer icon={logo} />

      <ButtonContainer>{createButtons()}</ButtonContainer>

      <div ref={topicRef}>
        <InfoSection theme={props.theme} color={topic} title={t(`titles.about.${topic}`)}>
          {t(`paragraphs.${topic}`)}
        </InfoSection>
      </div>
      <LogoContainer signature icon={<Signature />} />
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
