import React from 'react'
import { Title, Subtitle, Span, Container, Page, Button, Item } from './styles'
import { CursorSpan } from '../Shared/Styles'
import Typewriter from '../Shared/Typewriter'
import { connect } from 'react-redux'
import { dark } from '../Shared/Theme'
import { withNamespaces } from 'react-i18next'

const Hero = props => {
  const scrollToRef = () => props.scrollPosition.current.scrollIntoView({ behavior: 'smooth' })

  const rows = t => (
    <Container>
      <Title>{t('titles.frontpage.row1')}</Title>
      <Subtitle>
        {t('titles.frontpage.row2')} <Span>{t('titles.frontpage.name')}</Span>
      </Subtitle>
      <Subtitle>
        {t('titles.frontpage.row3')}{' '}
        <Span>
          <CursorSpan>
            <Typewriter words={[ t('expertises.fullstack'), t('expertises.design'), t('expertises.engineer') ]} />
          </CursorSpan>
        </Span>
      </Subtitle>
      <Item>
        <Button onClick={() => scrollToRef()}>{t('buttons.about')}</Button>
      </Item>
    </Container>
  )

  return <Page dark={props.theme === dark}>{rows(props.t)}</Page>
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(withNamespaces()(Hero))
