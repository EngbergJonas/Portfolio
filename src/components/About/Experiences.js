import React from 'react'
import { SketchylineDown, Icon, LightBulb } from './index'
import { TopicContainer, Line, TopicTitle, Underline, BlockContainer, IconContainer } from './styles'
import { topicList } from '../../assets/other/topicList'
import { setTopic } from '../../reducers/topicReducer'
import { setActiveButton } from '../../reducers/activeButtonReducer'
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
    const index = topicList.map(t => t.name.toLowerCase()).indexOf(topic.toLowerCase())
    props.setTopic(topicList[index])
    props.setActiveButton(index)
  }

  //
  return (
    <div>
      <BlockContainer>
        <TopicContainer main>
          <TopicTitle main>{props.t('titles.about.experiences')}</TopicTitle>
          <p>
            {props.t('exparagraph.1')}{' '}
            <Highlight handleChange={() => handleScrollToTopic('csharp')} value={'csharp'}>
              C#
            </Highlight>.
          </p>
          <p>
            {props.t('exparagraph.2')}{' '}
            <Highlight handleChange={() => handleScrollToTopic('javascript')} value={'javascript'}>
              JavaScript
            </Highlight>,
            <Highlight handleChange={() => handleScrollToTopic('html')} value={'html'}>
              HTML
            </Highlight>,{' '}
            <Highlight handleChange={() => handleScrollToTopic('css')} value={'css'}>
              CSS
            </Highlight>{' '}
            {props.t('exparagraph.3')}{' '}
            <Highlight handleChange={() => handleScrollToTopic('csharp')} value={'csharp'}>
              ASP.NET MVC
            </Highlight>.
          </p>
          <p>
            {props.t('exparagraph.4')}{' '}
            <Highlight handleChange={() => handleScrollToTopic('csharp')} value={'csharp'}>
              .NET Core
            </Highlight>,{' '}
            <Highlight handleChange={() => handleScrollToTopic('node')} value={'node'}>
              Node
            </Highlight>{' '}
            {props.t('exparagraph.5')} SQL
          </p>
        </TopicContainer>
        <IconContainer>
          <Icon icon={<LightBulb />} />
        </IconContainer>
      </BlockContainer>

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

export default connect(mapStateToProps, { setTopic, setActiveButton })(Experiences)
