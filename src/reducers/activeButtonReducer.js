export const setActiveButton = index => {
  return async dispatch => {
    dispatch({
      type: 'SET_ACTIVE',
      data: index
    })
  }
}

const initialState = 0

const activeButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return action.data
    default:
      return state
  }
}

export default activeButtonReducer
