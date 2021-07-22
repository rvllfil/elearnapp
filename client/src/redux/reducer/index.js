import { combineReducers } from 'redux'
import babReducer from './babReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import progressReducer from './progressReducer'
import subbabReducer from './subbabReducer'
import materiReducer from './materiReducer'
import quizReducer from './quizReducer'
import alertReducer from './alertReducer'

const rootReducer = combineReducers({
  bab: babReducer,
  subbab: subbabReducer,
  materi: materiReducer,
  quiz: quizReducer,
  auth: authReducer,
  alert: alertReducer,
  error: errorReducer,
  progress: progressReducer
})

export default rootReducer