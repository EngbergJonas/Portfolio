import React from 'react'
import { BlockContainer, TopicContainer, TopicTitle } from './styles'

const Topic = props => {
  return (
    <BlockContainer>
      <TopicContainer>
        <TopicTitle main>Technologies</TopicTitle>
        <div dangerouslySetInnerHTML={{ __html: props.children }} />
      </TopicContainer>
    </BlockContainer>
  )
}

export default Topic
