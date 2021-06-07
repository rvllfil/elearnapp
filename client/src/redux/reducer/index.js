import { combineReducers } from 'redux'
import babReducer from './babReducer'

const rootReducer = combineReducers({
  bab: babReducer
})

export default rootReducer