import {
  CREATE_SOAL_QUIZ,
  RETRIEVE_SOAL_QUIZ,
  UPDATE_SOAL_QUIZ,
  DELETE_SOAL_QUIZ,
  LOADING_SOAL_QUIZ
} from '../types/soalQuizTypes'

const initialState = {
  soalQuiz : [],
  loading: false
}


const soalQuizReducer = (state = initialState, action) => {
  const {type, payload} = action
  
  switch(type) {
    
    case CREATE_SOAL_QUIZ:
      return{
        ...state,
        soalQuiz: [...state.soalQuiz, payload],
        loading: false
      }
    
    case RETRIEVE_SOAL_QUIZ: 
      return {
        ...state,
        soalQuiz: payload,
        loading: false
      }

    case UPDATE_SOAL_QUIZ:
      return {
        ...state,
        soalQuiz: state.soalQuiz.map(data => {
          if(data.soal_quiz_id === payload.soal_quiz_id){
            return {...data, ...payload}
          } else {
            return data
          }
        }),
        loading: false
      }
    
    case DELETE_SOAL_QUIZ:
      return {
        ...state,
        soalQuiz: state.soalQuiz.filter(item => item.soal_quiz_id !== payload.soal_quiz_id)
      }

    case LOADING_SOAL_QUIZ:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  
  }
}

export default soalQuizReducer
