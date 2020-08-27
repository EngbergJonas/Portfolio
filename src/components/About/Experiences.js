import React from 'react'
import { SketchylineUp, SketchylineDown, topicsList } from './index'
import { TopicContainer, Line, TopicTitle, Underline } from './styles'
import { connect } from 'react-redux'
import { dark, light } from '../Shared/Theme'

const Highlight = props => {
  const color = props.value

  return (
    <Underline $color={props.dark ? dark.colors.pale[color] : light.colors.pale[color]} onClick={props.handleChange}>
      {props.children}
    </Underline>
  )
}

const Experiences = props => {
  //const topic = props.topic
  const scrollToTopic = () => window.scrollTo({ top: props.topicRef.current.offsetTop, left: 0, behavior: 'smooth' })
  const handleScrollToTopic = topic => {
    scrollToTopic()
    props.setTopic(topic)
  }

  return (
    <div>
      <Line>
        <SketchylineUp />
      </Line>

      <TopicContainer main>
        <TopicTitle main>{props.t('titles.about.experiences')}</TopicTitle>
        <p>
          {props.t('exparagraph.1')}{' '}
          <Highlight handleChange={() => handleScrollToTopic('java')} value={'java'}>
            {topicsList[0].name}
          </Highlight>, {props.t('exparagraph.2')}{' '}
          <Highlight handleChange={() => handleScrollToTopic('csharp')} value={'csharp'}>
            C#
          </Highlight>. {props.t('exparagraph.3')}{' '}
          <Highlight handleChange={() => handleScrollToTopic('python')} value={'python'}>
            Python
          </Highlight>
        </p>
        <p>
          {props.t('exparagraph.4')}{' '}
          <Highlight handleChange={() => handleScrollToTopic('react')} value={'react'}>
            React
          </Highlight>.
        </p>
        <p>
          {props.t('exparagraph.5')}{' '}
          <Highlight handleChange={() => handleScrollToTopic('angular')} value={'angular'}>
            Angular
          </Highlight>{' '}
          {props.t('exparagraph.5')}{' '}
          <Highlight handleChange={() => handleScrollToTopic('csharp')} value={'csharp'}>
            .NET
          </Highlight>.
        </p>
      </TopicContainer>
      <Line>
        <SketchylineDown />
      </Line>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(Experiences)
