import React, { useRef } from 'react'

import jonasLight from '../../assets/media/jonas_light.jpg'
import jonasDark from '../../assets/media/jonas_dark.jpg'

import { ReactComponent as LightBulb } from '../../assets/media/lightbulb.svg'
import { ReactComponent as Diamond } from '../../assets/media/diamond.svg'
import { ReactComponent as Pen } from '../../assets/media/pen.svg'
import { ReactComponent as Signature } from '../../assets/media/signature_thick.svg'
import { ReactComponent as SketchylineUp } from '../../assets/media/sketchylines_up.svg'
import { ReactComponent as SketchylineDown } from '../../assets/media/sketchylines_down.svg'
import { ReactComponent as Logo } from '../../assets/media/logo.svg'
import { connect } from 'react-redux'
import { dark } from '../Shared/Theme'

import { useTranslation } from 'react-i18next'

import {
  Page,
  IntroParagraph,
  Container,
  Title,
  ItemContainer,
  Image,
  ImageContainer,
  Line,
  //Skills & Experience styles
  InfoTitle,
  InfoTab,
  InfoContainer,
  InfoParagraph,
  Underline
} from './styles'

/*
        <LogoContainer icon={<LightBulb />} text={t('variables.invent')} />
        <LogoContainer icon={<Pen />} text={t('variables.design')} />
        <LogoContainer icon={<Diamond />} text={t('variables.implement')} />


*/
const About = React.forwardRef((props, ref) => {
  const { t } = useTranslation()

  const javaRef = useRef(null)
  const scrollToRef = ref => window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' })

  const LogoContainer = props => (
    <div>
      <ItemContainer>
        {props.icon}
        <IntroParagraph iconText>{props.text}</IntroParagraph>
      </ItemContainer>
    </div>
  )

  const SignatureContainer = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ItemContainer signature>
        <LogoContainer style={{ margin: '0' }} icon={<Signature />} />
      </ItemContainer>
    </div>
  )

  const SketchSection = props => (
    <div>
      <Line>
        <SketchylineDown />
      </Line>
      <Container>{props.children}</Container>
    </div>
  )

  const InfoSection = props => {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <InfoTab>
            <InfoContainer left={props.left}>{props.children}</InfoContainer>
            <InfoContainer>
              <div
                style={{
                  display: 'flex',
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <svg
                  style={{
                    height: '40%',
                    width: 'auto'
                  }}
                >
                  <Logo />
                </svg>
              </div>
            </InfoContainer>
          </InfoTab>
        </div>
      </div>
    )
  }

  const rows = t => (
    <div>
      {/* Title */}
      <Container>
        <ItemContainer>
          <Title ref={ref} id='about'>
            {t('titles.about')}
          </Title>
        </ItemContainer>
      </Container>

      {/* Profile Picture */}
      <Container>
        <ItemContainer>
          <ImageContainer>
            <Image src={props.theme === dark ? jonasDark : jonasLight} />
          </ImageContainer>
        </ItemContainer>
      </Container>

      {/* Intro */}
      <Container>
        <ItemContainer>
          <IntroParagraph>{t('paragraphs.aboutIntro')}</IntroParagraph>
        </ItemContainer>
      </Container>

      {/* Sepparator */}
      <Line>
        <SketchylineUp />
      </Line>

      {/* Experience */}
      <InfoSection left>
        <InfoTitle>Skills & Experiences</InfoTitle>
        <InfoParagraph>
          I started my carreer at Arcada, University of Applied Sciences, where I studied for 4 years to become an IT
          Engineer. During my first years I learned the basics of programming using{' '}
          <Underline onClick={() => scrollToRef(javaRef)} java>
            Java
          </Underline>, and the basics of game development using <Underline csharp>C#</Underline>. During my third and
          fourth year we dove deeper into AI learning and data parsing using <Underline python>Python</Underline>
        </InfoParagraph>
        <InfoParagraph>
          At the end of my fourth year I started to get really interested in web development. I started learning the
          basics of Javascript and moved deeper into modern frameworks. I also took the FullStack Open course at the
          University of Helsinki, which after I got a very good understanding of modern frameworks, specifically{' '}
          <Underline react>React</Underline>.
        </InfoParagraph>
        <InfoParagraph>
          After a few years of making applications for my own use I got my first development job at CGI. Where I have
          now worked for 6 months and learned all kind of new frameworks and technologies like{' '}
          <Underline angular>Angular</Underline> and <Underline csharp>.NET</Underline>.
        </InfoParagraph>
      </InfoSection>

      {/* Sepparator */}
      <Line>
        <SketchylineDown />
      </Line>

      <LogoContainer icon={<Logo />} />

      <InfoSection left>
        <InfoTitle java ref={javaRef}>
          Java
        </InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>
      <InfoSection>
        <InfoTitle python>Python</InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>

      <InfoSection left>
        <InfoTitle react>React</InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>

      <InfoSection>
        <InfoTitle angular>Angular</InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>

      <InfoSection left>
        <InfoTitle csharp>C# and .NET</InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>
      <SignatureContainer />
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

/*
      <InfoSection>
        <InfoTitle java ref={javaRef}>
          Java
        </InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>

      <InfoSection left>
        <InfoTitle python>Python</InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>

      <InfoSection>
        <InfoTitle react>React</InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>

      <InfoSection left>
        <InfoTitle angular>Angular</InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>

      <InfoSection>
        <InfoTitle csharp>C# and .NET</InfoTitle>
        <InfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt arcu ut magna eleifend, in egestas
          erat egestas. Integer placerat ligula ac nisi vulputate, eu semper lectus euismod. Integer ut est at ex
          feugiat feugiat. In sed gravida lacus. Ut facilisis metus sit amet lectus imperdiet, a vehicula enim mattis.
          Nunc nec tortor mi. Sed pharetra, quam sed fermentum congue, ante quam ullamcorper est, a elementum erat sem
          ut nisi. Praesent vehicula nisi nunc, sit amet fermentum dui faucibus quis. Sed placerat diam eget rutrum
          tempor. Curabitur ac consectetur ligula, quis pulvinar nibh.
        </InfoParagraph>
      </InfoSection>


*/
