import {
  CREATE_JAWABAN_QUIZ,
  RETRIEVE_JAWABAN_QUIZ,
  UPDATE_JAWABAN_QUIZ,
  DELETE_JAWABAN_QUIZ,
  LOADING_JAWABAN_QUIZ
} from '../types/jawabanQuizTypes'

const initialState = {
  jawabanQuiz : [],
  loading: false
}


const jawabanQuizReducer = (state = initialState, action) => {
  const {type, payload} = action
  
  switch(type) {
    
    case CREATE_JAWABAN_QUIZ:
      return{
        ...state,
        jawabanQuiz: [...state.jawabanQuiz, payload],
        loading: false
      }
    
    case RETRIEVE_JAWABAN_QUIZ: 
      return {
        ...state,
        jawabanQuiz: payload,
        loading: false
      }

    case UPDATE_JAWABAN_QUIZ:
      return {
        ...state,
        jawabanQuiz: state.jawabanQuiz.map(data => {
          if(data.jawaban_quiz_id === payload.jawaban_quiz_id){
            return {...data, ...payload}
          } else {
            return data
          }
        }),
        loading: false
      }
    
    case DELETE_JAWABAN_QUIZ:
      return {
        ...state,
        jawabanQuiz: state.jawabanQuiz.filter(item => item.jawaban_quiz_id !== payload.jawaban_quiz_id)
      }

    case LOADING_JAWABAN_QUIZ:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  
  }
}

export default jawabanQuizReducer
