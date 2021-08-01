import { combineReducers } from 'redux'
import allMateriReducer from './allMateriReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import progressReducer from './progressReducer'
import babReducer from './babReducer'
import subbabReducer from './subbabReducer'
import materiReducer from './materiReducer'
import quizReducer from './quizReducer'
import alertReducer from './alertReducer'

const rootReducer = combineReducers({
  allMateri: allMateriReducer,
  subbab: subbabReducer,
  bab: babReducer,
  materi: materiReducer,
  quiz: quizReducer,
  auth: authReducer,
  alert: alertReducer,
  error: errorReducer,
  progress: progressReducer
})

export default rootReducer