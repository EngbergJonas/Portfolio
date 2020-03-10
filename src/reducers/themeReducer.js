import { dark } from '../components/Theme'

export const setTheme = theme => {
  return async dispatch => {
    dispatch({
      type: 'SET_THEME',
      theme
    })
  }
}

const initialState = dark

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return action.theme
    default:
      return state
  }
}

export default themeReducer
