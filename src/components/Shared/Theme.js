import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

const fonts = {
  size: {
    xs: '16px',
    s: '18px',
    md: '20px',
    lg: '22px',
    xl: '1.5rem',
    large: {
      xs: '30px',
      s: '40px',
      md: '50px',
      lg: '60px',
      xl: '70px',
      xxl: '80px',
      hl: '100px'
    }
  },
  weight: {
    thin: '100',
    light: '300',
    normal: '400',
    bold: '500',
    thick: '700'
  }
}

export const dark = {
  colors: {
    primaryDark: '#222831', //dark-blue
    primaryLight: '#393E46', //gray
    secondaryDark: '#66FCF1', //cyan
    secondaryLight: '#FC0D56', //red
    secondaryPale: 'rgba(255, 232, 115, 1)', //yellow
    neutralLight: '#FFFFFF', //white
    neutralDark: '#66FCF1', //cyan
    pale: {
      react: 'rgba(97, 219, 251, 0.8)',
      angular: 'rgba(181, 46, 49, 0.8)',
      java: 'rgba(248, 152, 32, 0.8)',
      python: 'rgba(255, 232, 115, 0.8)',
      csharp: 'rgba(106, 13, 173, 0.8)'
    },
    react: 'rgba(97, 219, 251, 1)',
    angular: 'rgba(181, 46, 49, 1)',
    java: 'rgba(248, 152, 32, 1)',
    python: 'rgba(255, 232, 115, 1)',
    csharp: 'rgba(106, 13, 173, 1)'
  },
  fonts
}

export const light = {
  colors: {
    primaryDark: '#EAE7DC', //white
    primaryLight: '#D8C3A5', //beige
    secondaryDark: '#E85A4F', //red
    secondaryLight: '#E98074', //light-red
    secondaryPale: '#E98074', //light-red (again)
    neutralLight: '#686764', //dark-gray
    neutralDark: '#E85A4F', //red (again)
    pale: {
      react: 'rgba(97, 219, 251, 0.8)',
      angular: 'rgba(181, 46, 49, 0.8)',
      java: 'rgba(248, 152, 32, 0.8)',
      python: 'rgba(48, 105, 152, 0.8)',
      csharp: 'rgba(106, 13, 173, 0.8)'
    },
    react: 'rgba(97, 219, 251, 1)',
    angular: 'rgba(181, 46, 49, 1)',
    java: 'rgba(248, 152, 32, 1)',
    python: 'rgba(48, 105, 152, 1)',
    csharp: 'rgba(106, 13, 173, 1)'
  },
  fonts
}

const Theme = props => <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>

const mapStateToProps = state => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(Theme)
