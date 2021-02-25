import React from 'react'
import { Button, ButtonContainer } from './styles.js'
import { topicList } from '../../assets/other/topicList'
import { dark, light } from '../Shared/Theme'
import { connect } from 'react-redux'
import { setTopic } from '../../reducers/topicReducer'
import { setActiveButton } from '../../reducers/activeButtonReducer'

const Buttons = (props) => {
  const handleTopicChange = (index, topic) => {
    props.setTopic(topic)
    props.setActiveButton(index)
  }

  const color = (topic) => (props.theme === dark ? dark.colors.hack[topic.name.toLowerCase()] : light.colors.hack[topic.name.toLowerCase()])

  return (
    <ButtonContainer>
      {topicList.map((topic, index) => (
        <Button
          $color={color(topic)}
          $hoverColor={color(topic)}
          light={props.theme === light}
          key={topic.name.toLowerCase()}
          onClick={() => handleTopicChange(index, topic)}
          active={props.activeButton === index}
        >
          {topic.name.toLowerCase().includes('csharp') ? 'C#' : topic.name.toUpperCase()}
        </Button>
      ))}
    </ButtonContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    activeButton: state.activeButton,
  }
}

export default connect(mapStateToProps, { setTopic, setActiveButton })(Buttons)
