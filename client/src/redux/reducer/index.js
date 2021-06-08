import { combineReducers } from 'redux'
import babReducer from './babReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
  bab: babReducer,
  auth: authReducer,
  error: errorReducer
})

export default rootReducer