import { GET_BAB_ALL, LOADING_BAB } from '../types/allMateriTypes'

const initialState = {
  bab: [],
  loading: false
}

const allMateriReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BAB_ALL:
      return {
        ...state,
        bab: action.payload,
        loading: false
      }
    case LOADING_BAB:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default allMateriReducer