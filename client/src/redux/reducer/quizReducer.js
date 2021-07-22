import {
  CREATE_QUIZ,
  RETRIEVE_QUIZ,
  UPDATE_QUIZ,
  DELETE_QUIZ,
  LOADING_QUIZ
} from '../types/quizTypes'

const initialState = {
  quiz : [],
  loading: false
}


const quizReducer = (state = initialState, action) => {
  const {type, payload} = action
  
  switch(type) {
    
    case CREATE_QUIZ:
      return{
        ...state,
        quiz: [...state.quiz, ...payload],
        loading: false
      }
    
    case RETRIEVE_QUIZ: 
      return {
        ...state,
        quiz: payload,
        loading: false
      }

    case UPDATE_QUIZ:
      return {
        ...state,
        quiz: state.quiz.map(data => {
          if(data.id === payload.id){
            return {...data, ...payload}
          } else {
            return data
          }
        }),
        loading: false
      }
    
    case DELETE_QUIZ:
      return {
        ...state,
        quiz: state.quiz.filter(item => item.id !== payload.id)
      }

    case LOADING_QUIZ:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  
  }
}

export default quizReducer
