import { CREATE_PROGRESS, RETRIEVE_PROGRESS, LOADING_PROGRESS } from '../types/progressTypes'

const initialState = {
  progress: [],
  loading: false
}

const progressReducer = (state = initialState, action) => {
  switch (action.type) {    
    case CREATE_PROGRESS:
      return {
        ...state,
        progress: [...state.progress, action.payload],
        loading: false
      }
    case RETRIEVE_PROGRESS:
      return {
        ...state,
        progress: action.payload,
        loading: false
      }
    case LOADING_PROGRESS:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default progressReducer