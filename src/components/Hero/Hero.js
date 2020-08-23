import React from 'react'
import { Title, Subtitle, Highlight, Container, Page, Button, Item } from './styles'
import { Cursor } from '../Shared/Styles'
import Typewriter from '../Shared/Typewriter'
import { connect } from 'react-redux'
import { dark } from '../Shared/Theme'

import { useTranslation } from 'react-i18next'

const Hero = props => {
  const scrollToRef = () => props.scrollPosition.current.scrollIntoView({ behavior: 'smooth' })

  const { t } = useTranslation()

  const greetVisitor = () => {
    const time = parseInt(new Date().toLocaleTimeString('fi-FI').slice(0, 2))
    return time < 12
      ? t('titles.frontpage.greeting.morning')
      : time < 17 ? t('titles.frontpage.greeting.afternoon') : t('titles.frontpage.greeting.evening')
  }

  const rows = t => (
    <Container>
      <Title>{greetVisitor()}</Title>

      <Subtitle>
        {t('titles.frontpage.row2')} <Highlight>{t('titles.frontpage.name')}</Highlight>
      </Subtitle>

      <Subtitle>
        {t('titles.frontpage.row3')}{' '}
        <Highlight>
          <Cursor>
            <Typewriter words={[ t('expertises.fullstack'), t('expertises.design'), t('expertises.engineer') ]} />
          </Cursor>
        </Highlight>
      </Subtitle>

      <Item>
        <Button onClick={() => scrollToRef()}>{t('buttons.about')}</Button>
      </Item>
    </Container>
  )
  return <Page dark={props.theme === dark}>{rows(t)}</Page>
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(Hero)
