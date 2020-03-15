import React from 'react'
import styled from 'styled-components'
import device from '../../device'
import { ReactSVG } from 'react-svg'

export const Page = styled.div`
  background: ${props => props.theme.colors.primary};
  border-top: 1px solid ${props => props.theme.colors.test1};
`

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fonts.size.large.md};
  font-weight: ${props => props.theme.fonts.weight.bold};
  margin: 3rem 0;
  /* This will position the anchor tag nicely */
  &::before {
    display: block;
    content: "";
    margin-top: -7rem;
    height: 7rem;
    visibility: hidden;
    pointer-events: none;
  }
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.large.xl};
  }
`

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fonts.size.sm};
  font-family: 'Raleway', sans-serif;
  font-weight: ${props => (props.iconText ? props.theme.fonts.weight.bold : props.theme.fonts.weight.light)};
  color: ${props => (props.info ? props.theme.colors.info : props.theme.colors.light)};
  text-align: center;
  @media ${device.greaterThan.laptop} {
    font-size: ${props => props.theme.fonts.size.xl};
  }
`

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: ${props => (props.text ? '80%' : '100%')};
  @media ${device.greaterThan.laptopMin} {
    width: ${props => (props.text ? '50%' : '100%')};
  }
  @media ${device.greaterThan.desktopMin} {
    width: ${props => (props.text ? '30%' : '100%')};
  }
`

export const ContainerItem = styled.div``

export const Icon = styled(({ signature, ...props }) => <ReactSVG {...props} />)`
  stroke: ${props => props.theme.colors.test1};
  margin: auto;
  height: auto;
  width: ${props => (props.signature ? '30%' : '80%')};
  fill: ${props => props.theme.colors.test1};
  padding: ${props => (props.signature ? '1rem 0 1rem' : '')};
  @media ${device.greaterThan.laptop} {
    width: ${props => (props.signature ? '60%' : '100%')};
    }
`
