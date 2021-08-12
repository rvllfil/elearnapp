import {
  CREATE_SOAL_QUIZ,
  CREATE_SOAL_JAWABAN_QUIZ,
  RETRIEVE_SOAL_QUIZ,
  UPDATE_SOAL_QUIZ,
  UPDATE_SOAL_JAWABAN_QUIZ,
  DELETE_SOAL_QUIZ,
  DELETE_SOAL_JAWABAN_QUIZ,
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

    case CREATE_SOAL_JAWABAN_QUIZ:
      return{
        ...state,
        soalQuiz: state.soalQuiz.map(data => {
          console.log(data.soal_quiz_id, payload.soal_quiz_id, data.jawaban)
          if(  data.jawaban === null){
            console.log('wew')
            return {
              ...data, 
              jawaban: [
                {
                  jawaban_quiz_id: payload.jawaban_quiz_id,
                  text_jawaban: payload.text_jawaban,
                  benar: payload.benar
                }
              ]
            }
          } else {
            if(data.soal_quiz_id === payload.soal_quiz_id){
              console.log('lol')
              return {
                ...data, 
                jawaban: [
                  ...data.jawaban,
                  {
                    jawaban_quiz_id: payload.jawaban_quiz_id,
                    text_jawaban: payload.text_jawaban,
                    benar: payload.benar
                  }
                ]
              }
            } else {
              return data
            }
          }
          
        }),
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
    
    case UPDATE_SOAL_JAWABAN_QUIZ:
      return{
        ...state,
        soalQuiz: state.soalQuiz.map(data => {
          if(data.soal_quiz_id === payload.soal_quiz_id){
            let jawaban = data.jawaban.map(item => {
              if(item.jawaban_quiz_id === payload.jawaban_quiz_id) {
                return {
                  ...item, 
                  text_jawaban: payload.text_jawaban,
                  benar: payload.benar
                }
              } else {
                return item
              }
            })
            return {
              ...data,
              jawaban: jawaban
              
            }
          } else {
            return data
          }
        })
      }

    case DELETE_SOAL_QUIZ:
      return {
        ...state,
        soalQuiz: state.soalQuiz.filter(item => item.soal_quiz_id !== payload.soal_quiz_id)
      }

    case DELETE_SOAL_JAWABAN_QUIZ:
      return{
        ...state,
        soalQuiz: state.soalQuiz.map(data => {
          if(data.soal_quiz_id === payload.soal_quiz_id){
            return {
              ...data,
              jawaban: data.jawaban.filter(item => item.jawaban_quiz_id !== payload.jawaban_quiz_id)
              
            }
          } else {
            return data
          }
        })
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
