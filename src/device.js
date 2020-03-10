/* Most of these will be removed! Testing purposes */

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileLMin: '376px',
  mobileL: '425px',
  tabletMin: '426px',
  tablet: '768px',
  laptopMin: '769px',
  laptop: '1024px',
  laptopLMin: '1025px',
  laptopL: '1440px',
  desktopMin: '1441px',
  desktop: '1920px',
  desktopLMin: '1921px',
  desktopL: '2560px'
}

export default {
  greaterThan: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileLMin: `(min-width: ${size.mobileLMin})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tabletMin: `(min-width: ${size.tabletMin})`,
    tablet: `(min-width: ${size.tablet})`,
    laptopMin: `(min-width: ${size.laptopMin})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopLMin: `(min-width: ${size.laptopLMin})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktopMin: `(min-width: ${size.desktopMin})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopLMin: `(min-width: ${size.desktopLMin})`,
    desktopL: `(min-width: ${size.desktop})`
  },
  smallerThan: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileLMin: `(max-width: ${size.mobileLMin})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletMin: `(max-width: ${size.tabletMin})`,
    tablet: `(max-width: ${size.tablet})`,
    laptopMin: `(max-width: ${size.laptopMin})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopLMin: `(max-width: ${size.laptopLMin})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktopMin: `(max-width: ${size.desktopMin})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopLMin: `(max-width: ${size.desktopLMin})`,
    desktopL: `(max-width: ${size.desktop})`
  }
}
