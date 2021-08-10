import { combineReducers } from 'redux'
import allMateriReducer from './allMateriReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import progressReducer from './progressReducer'
import babReducer from './babReducer'
import subbabReducer from './subbabReducer'
import materiReducer from './materiReducer'
import quizReducer from './quizReducer'
import soalQuizReducer from './soalQuizReducer'
import jawabanQuizReducer from './jawabanQuizReducer'
import alertReducer from './alertReducer'

const rootReducer = combineReducers({
  allMateri: allMateriReducer,
  subbab: subbabReducer,
  bab: babReducer,
  materi: materiReducer,
  quiz: quizReducer,
  soalQuiz: soalQuizReducer,
  jawabanQuiz: jawabanQuizReducer,
  auth: authReducer,
  alert: alertReducer,
  error: errorReducer,
  progress: progressReducer
})

export default rootReducer