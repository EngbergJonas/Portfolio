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
    primary: '#1A1A1D',
    secondary: '#4E4E50',
    danger: '#6F2242',
    info: '#950740',
    pale: '#C3073F',
    light: '#FFFFFF',
    test1: '#66FCF1'
  },
  fonts
}

/*
#EAE7DC white
#D8C3A5 beige
#8E8D8A gray
#E98074 light red
#E85A4F red
*/
export const light = {
  colors: {
    primary: '#',
    secondary: 'black',
    danger: '#EDCD90',
    info: '#EDCD90',
    pale: 'orange',
    light: '#FFFFFF',
    test1: '#EDCD90'
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
