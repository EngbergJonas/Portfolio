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
    primaryDark: '#1A1A1D', //black
    primaryLight: '#4E4E50', //gray
    secondaryDark: '#6F2242', //red-dark
    secondaryLight: '#950740', //red-lighter
    secondayPale: '#C3073F', //red-lightest
    neutralLight: '#FFFFFF', //white
    neutralDark: '#66FCF1' //cyan
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
    neutralDark: '#E85A4F' //red (again)
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
