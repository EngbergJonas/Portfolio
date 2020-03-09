import { dark } from '../themes'

export const setTheme = theme => {
  return async dispatch => {
    dispatch({
      type: 'SET_THEME',
      theme
    })
  }
}

const themeReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.theme }
    default:
      return state
  }
}

export default themeReducer
